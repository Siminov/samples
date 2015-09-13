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



/*
    Import Required Siminov
 */
document.write('<script type="text/javascript" src="Siminov/Import.js"></script>');


/**
 	Exposes methods to deal with SIMINOV HYBRDI FRAMEWORK.

 		Such As

 			1. Initialize: Entry point to the SIMINOV HYBRID.

	@class Siminov
	@constructor
	
 */
function Siminov() {

}



/**
 	It is the entry point to the SIMINOV HYBRID FRAMEWORK.

 	When application starts it should call this method to activate SIMINOV HYBRID FRAMEWORK.

	Siminov will initialize all databases, and do necessary processing.

	EXAMPLE: 
          document.addEventListener("deviceready", Siminov.initialize, false);
	
	@class Siminov
	@method initialize
	@static
	@constructor
 */
Siminov.initialize = function() {

	var callback = arguments && arguments[0];
	
    var adapter = new Adapter();
    adapter.setAdapterName(Constants.SIMINOV_ADAPTER);
    adapter.setHandlerName(Constants.SIMINOV_ADAPTER_INITIALIZE_SIMINOV_HANDLER);

	if(callback == undefined || callback == null) {
	    Adapter.invoke(adapter);
	} else {
	
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		adapter.setCallback(initializeCallback);
		
	    Adapter.invoke(adapter);
	    
	    function initializeCallback(data) {
			callback && callback.onSuccess && callback.onSuccess(data);
	    }	
	}
}


Siminov.initializeAsync = function(callback) {
	Siminov.initialize(callback?callback:new Callback());
}


/**
	It shudown's Siminov Framework, and releases all resources acquired by Siminov.

	@class Siminov
	@method shutdown
	@static
	@constructor
*/
Siminov.shutdown = function() {

	var adapter = new Adapter();
	
    adapter.setAdapterName(Constants.SIMINOV_ADAPTER);
    adapter.setHandlerName(Constants.SIMINOV_ADAPTER_SHUTDOWN_SIMINOV_HANDLER);

    Adapter.invoke(adapter);
}


Siminov.shutdownAsync = function(onSuccess, onError) {

	var adapter = new Adapter();
	
    adapter.setAdapterName(Constants.SIMINOV_ADAPTER);
    adapter.setHandlerName(Constants.SIMINOV_ADAPTER_SHUTDOWN_SIMINOV_HANDLER);

	adapter.setOnSuccess(onSuccess);
	adapter.setOnError(onError);

    Adapter.invoke(adapter);
}