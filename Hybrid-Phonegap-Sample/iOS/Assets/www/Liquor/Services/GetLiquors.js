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

var LiquorList = require('../../LiquorList');

var Log = require('../../Siminov/Log/Log');
var Function = require('../../Siminov/Function/Function');
var Service = require('../../Siminov/Service/Service');
var Callback = require('../../Siminov/Callback');
var Database = require('../../Siminov/Database/Database');

var Liquor = require('../Models/Liquor');
var LiquorBrand = require('../Models/LiquorBrand');
var LiquorsReader = require('../ReaderWritter/LiquorsReader');
var Constants = require('../ReaderWritter/LiquorsReader');
var LiquorConstants = require('../Constants');

module.exports = GetLiquors;


function GetLiquors() {
    
    Service.apply(this, arguments);
    
    this.setService(GetLiquors.SERVICE_NAME);
    this.setRequest(GetLiquors.REQUEST_NAME);
    
    this.onStart = function() {
        //alert("onServiceStart");
    }
    
    this.onQueue = function() {
        //alert("onServiceQueue");
    }
    
    this.onPause = function() {
        //alert("onServicePause");
    }
    
    this.onResume = function() {
        //alert("onServiceResume");
    }
    
    this.onFinish = function() {
        //alert("onServiceFinish");
    }
    
    this.onRequestInvoke = function(connectionRequest) {
        //alert("onServiceRequestInvoke");
    }
    
    this.onRequestFinish = function(connectionResponse) {
        //alert("onServiceRequestFinish");
        
        var home = this.getResource("HOME");
        
        var liquorsReader = new LiquorsReader();
        liquorsReader.parse(connectionResponse.getResponse());
        
        var liquors = liquorsReader.getLiquors();
        if(liquors != undefined && liquors != null && liquors.length > 0) {
            
            var callbackCount = 0;
            
            var callback = new Callback();
            callback.onExecute = function(transaction) {
                
                for(var i = 0;i < liquors.length;i++) {
                    var liquor = liquors[i];
                    
                    var saveCallback = new Callback();
                    saveCallback.onSuccess =  function() {
                        //alert("liquor saved");
                    }
                    
                    liquor.saveOrUpdateAsync(saveCallback, transaction);
                }
            }
            
            callback.onSuccess = function() {
                
                if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
                    ++callbackCount;
                    
                    if((callbackCount + 1) == liquors.length) {
                        Log.debug("GetLiquors", "onRequestFinish", "Save Or Update Success: Populate Home: " + callbackCount);
                        loadLiquors();
                    }
                } else if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
                    loadLiquors();
                }
            }
            
            callback.onFailure = function() {
                alert("Transaction Failure");
            }
            
            
            if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
                for(var i = 0;i < liquors.length;i++) {
                    var liquor = liquors[i];
                    liquor.saveOrUpdateAsync(callback);
                }
            } else if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
                
                var databaseDescriptorCallback = new Callback();
                databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
                    Database.beginTransactionAsync(databaseDescriptor, callback);
                }
                
                new Liquor().getDatabaseDescriptorAsync(databaseDescriptorCallback);
            } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
                
                for(var i = 0;i < liquors.length;i++) {
                    var liquor = liquors[i];
                    liquor.saveOrUpdate();
                    break;
                }
                
                loadLiquors();
            }
            
            function loadLiquors() {
                
                home.props.navigator.push({
                    title: "Liquor List",
                    component: LiquorList,
                });
            }
        }		
    }
    
    this.onTerminate = function(serviceException) {
        //alert("onServiceTerminate");
    }
}



GetLiquors.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
GetLiquors.REQUEST_NAME = "GET-LIQUORS";


Function.extend(Service, GetLiquors);
