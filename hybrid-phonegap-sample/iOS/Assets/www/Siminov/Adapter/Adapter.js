/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/



/**
	It is one which describes properties required to map Hybrid TO Native and vice-versa.

	@module Adapter
*/

var Utils = require('../Utils/Utils');
var Dictionary = require('../Collection/Dictionary');
var HybridSiminovDatas = require('../Model/HybridSiminovDatas');
var Log = require('../Log/Log');
var Constants = require('../Constants');
var Function = require('../Function/Function');

/*
 * React Native Imports
 */
var SIHReactInterceptor = require('NativeModules').SIHReactInterceptor;
var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');


module.exports = Adapter;



/**
	Handle Request between NATIVE-TO-HYBRID and HYBRID-TO-NATIVE.
	Exposes method to GET and SET information about request.
 
	@module Adapter
	@class Adapter
	@constructor
 */
function Adapter() {

	var requestId = Utils.uniqueNumber();

    var adapterName;
    var handlerName;
    var adapterMode = Adapter.ADAPTER_SYNC_MODE;

    var parameters = new Array();

	var callback;


	this.getRequestId = function() {
		return requestId;	
	}
	

	/**
		Get Adapter Name.
		
		@method getAdapterName
		@return {String} Name of Adapter.	
	*/
    this.getAdapterName = function() {
        return adapterName;
    }

	/**
		Set Adapter Name.
		
		@method setAdapterName
		@param value {String} Name of Adapter.
	*/
    this.setAdapterName = function(value) {
        adapterName = value;
    }


	/**
		Get Handler Name.
		
		@method getHandlerName
		@return {String} Name of Handler.
	*/
    this.getHandlerName = function() {
        return handlerName;
    }

	/**
		Set Handler Name.
		
		@method setHandlerName
		@param value {String} Name of Handler
	*/
    this.setHandlerName = function(value) {
        handlerName = value;
    }

	this.getAdapterMode = function() {
		return adapterMode;
	}
	
	this.setAdapterMode = function(value) {
		adapterMode = value;
	}
	

	/**
		Add Adapter Parameter.
		
		@method addParameter
		@param parameter {String} Parameter.
	*/
    this.addParameter = function(parameter) {
        parameters.push(parameter);
    }

	/**
		Get All Parameters.
		
		@method getParameters
		@return {Array} All Parameters.
	*/
	this.getParameters = function() {
		return parameters;
	}
	
	this.removeParameters = function() {
		parameters = new Array();
	}

	this.getCallback = function() {
		return callback;
	}
	
	this.setCallback = function(value) {
		callback = value;
	}
}


Adapter.requests;

Adapter.REQUEST_SYNC_MODE = "SYNC";
Adapter.REQUEST_ASYNC_MODE = "ASYNC";


/**
	Invokes Handler based on request parameter set.
	It invokes Native API.
	
	@method invoke
*/
Adapter.invoke = function(adapter) {

    if(!Adapter.requests) {
        Adapter.requests = new Dictionary();
    }
    
	var adapterName = adapter.getAdapterName();
    var handlerName = adapter.getHandlerName();
    var adapterMode = adapter.getAdapterMode();

    var parameters = adapter.getParameters();
    	
    var siminovDatas = Object.create(HybridSiminovDatas);
    siminovDatas.datas = new Array();
    
    for(var i = 0;i < parameters.length;i++) {
        var siminovData = Object.create(HybridSiminovDatas.HybridSiminovData);

		var parameter = parameters[i];
		if(parameter != undefined) {
            
            if(window.SIMINOV != undefined) {
                parameter = encodeURI(parameters[i]);
            } else {
                parameter = encodeURI(encodeURI(parameters[i]));
            }
		} else {
			parameter = "";
		}

        siminovData.value = parameter;
        siminovDatas.datas.push(siminovData);
    }

    var json = JSON.stringify(siminovDatas);
    
    Log.debug("Adapter", "invoke", "SIMINOV HYBRID TO NATIVE - ADAPTER: " + adapterName + ", HANDLER: " + handlerName + ", DATA: " + json);
    
    /**
     * Android Native Bridge
     */
    if(window.SIMINOV) {
    
    	if(adapterMode && adapterMode == Adapter.REQUEST_ASYNC_MODE) {
    		
	    	Adapter.requests.add(adapter.getRequestId(), adapter);	
    	
    		Log.debug("Adapter", "invoke", "handleHybridToNativeAsync: REQUEST ID: " + adapter.getRequestId() + ", ADAPTER NAME: " + adapterName + ", HANDLER NAME: " + handlerName + ", DATA: " + json);
	        return window.SIMINOV.handleHybridToNativeAsync(adapter.getRequestId(), adapterName + "." + handlerName, json);
    	} 
    	
        return window.SIMINOV.handleHybridToNative(adapterName + "." + handlerName, json);
    }

    
    json = json.replace(new RegExp('#', 'g'), "%23");
    
    /*
     * React Native iOS Native Bridge
     */
    if(SIHReactInterceptor) {
        Log.debug("Adapter", "invoke", "handleHybridToNativeAsync: REQUEST ID: " + adapter.getRequestId() + ", ADAPTER NAME: " + adapterName + ", HANDLER NAME: " + handlerName + ", DATA: " + json);
        
        
        if(adapterMode == undefined || adapterMode == null || adapterMode == Adapter.ADAPTER_SYNC_MODE) {
            SIHReactInterceptor.handleHybridToNative(Constants.HTTP_POST_METHOD, adapterName + "." + handlerName, json, reactSyncCallback);
            
            function reactSyncCallback() {
                alert("react sync callback");
            }
        } else {
            Adapter.requests.add(adapter.getRequestId(), adapter);
            
            SIHReactInterceptor.handleHybridToNativeAsync(Constants.HTTP_POST_METHOD, adapter.getRequestId(), adapterName + "." + handlerName, json);
        }
        
        return;
    }

    
    
    /**
     * iOS and Windows Sync Native Bridge
     */
    if(adapterMode == undefined || adapterMode == null || adapterMode == Adapter.ADAPTER_SYNC_MODE) {
        
        var xmlHttpRequest = new XMLHttpRequest();
        
        xmlHttpRequest.open(Constants.HTTP_POST_METHOD, Constants.HTTP_SIMINOV_PROTOCOL + "?" + Constants.HTTP_REQUEST_API_QUERY_PARAMETER + "=" + adapterName + "." + handlerName + "&" + Constants.HTTP_REQUEST_DATA_QUERY_PARAMETER + "=" + json, false);
        xmlHttpRequest.send(json);
        
        return xmlHttpRequest.responseText;
    }
    
    
    /**
     * iOS and Windows Async Native Bridge
     */
    Adapter.requests.add(adapter.getRequestId(), adapter);
    
    Log.debug("Adapter", "invoke", "handleHybridToNativeAsync: REQUEST ID: " + adapter.getRequestId() + ", ADAPTER NAME: " + adapterName + ", HANDLER NAME: " + handlerName + ", DATA: " + json);
    
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open(Constants.HTTP_POST_METHOD, Constants.HTTP_SIMINOV_PROTOCOL + "?" + Constants.HTTP_REQUEST_ID + "=" + adapter.getRequestId() + "&" + Constants.HTTP_REQUEST_MODE + "=" + Adapter.REQUEST_ASYNC_MODE + "&" + Constants.HTTP_REQUEST_API_QUERY_PARAMETER + "=" + adapterName + "." + handlerName + "&" + Constants.HTTP_REQUEST_DATA_QUERY_PARAMETER + "=" + json, true);
    
    xmlHttpRequest.send(json);
    
    return xmlHttpRequest.responseText;
}


/**
	Any request from NATIVE-TO-HYBRID is first handled by this API.
	
	@method handle
	@param action {String} Name of Action. Action Represent HYBRID API Needs To Be Invoke.
	@param data {String} Data Is Basically Parameter To HYBRID API.
*/
Adapter.handle = function(action, data) {
	Log.debug("Adapter", "handle", "SIMINOV NATIVE TO HYBRID - ACTION: " + action + ", DATA: " + data);

    var functionName = action.substring(0, action.indexOf('.'));
    var apiName = action.substring(action.lastIndexOf('.') + 1, action.length);

    var obj = Function.createFunctionInstance(functionName);
    Function.invokeAndInflate(obj, apiName, data);
}

Adapter.handleAsync = function(requestId, data) {
	Log.debug("Adapter", "handleAsync", "SIMINOV NATIVE TO HYBRID ASYNC - REQUEST ID: " + requestId + ", DATA: " + data);
	
	var request = Adapter.requests.get(requestId);
	if(request == undefined) {
		Log.debug("Adapter", "handleAsync", "NO REQUEST FOUND: " + requestId);
		return;
	}
	
	var callback = request.getCallback();
	Log.debug("Adapter", "handleAsync", "Callback: " + callback);
	callback && callback(data);
	
	/**
	 * Remove Request From Queue
	*/
	Adapter.requests.remove(requestId);
}


if(RCTDeviceEventEmitter) {
    
    var REACT_CALLBACK_API = "api";
    var REACT_CALLBACK_ACTION = "action";
    var REACT_CALLBACK_PARAMETERS = "parameters";
    
    var REACT_CALLBACK_API_HANDLE = "handle";
    var REACT_CALLBACK_API_HANDLE_ASYNC = "handleAsync";
    
    var REACT_INTECEPTOR = RCTDeviceEventEmitter.addListener(
        'Adapter',
        handler
    );
    
    function handler(parameters) {
        
        var api = parameters[REACT_CALLBACK_API];
        var action = parameters[REACT_CALLBACK_ACTION];
        var params = parameters[REACT_CALLBACK_PARAMETERS];
        
        if(api === REACT_CALLBACK_API_HANDLE) {
            Adapter.handle(action, params);
        } else if(api === REACT_CALLBACK_API_HANDLE_ASYNC) {
            Adapter.handleAsync(action, params);
        }
    }
}

