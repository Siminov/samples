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




function GetLiquors() {

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

		var liquorsReader = new LiquorsReader();
		liquorsReader.parse(connectionResponse.getResponse());
		
		var liquors = liquorsReader.getLiquors();
		if(liquors != undefined && liquors != null && liquors.length > 0) {
			
			var callback = new Callback();
			callback.onExecute = function() {
				
				for(var i = 0;i < liquors.length;i++) {
					liquor.saveOrUpdateAsync(callback);
				}
			}			
			
			callback.onSuccess = function() {
				alert("Transaction Successful");
			}	
		
			callback.onFailure = function() {
				alert("Transaction Failure");
			}
			
			var databaseDescriptor = new Liquor().getDatabaseDescriptor();
			Database.beginTransactionAsync(databaseDescriptor, callback);
			
			
			
			/*var callbackCount = 0;
			for(var i = 0;i < liquors.length;i++) {

				var liquor = liquors[i];
				
				var callback = new Callback();
				callback.onSuccess = function() {
					++callbackCount;
					
					if((callbackCount + 1) == liquors.length) {
						Log.debug("GetLiquors", "onRequestFinish", "Save Or Update Success: Populate Home: " + callbackCount);
						populateHome();
					}
				
					Log.debug("GetLiquors", "onRequestFinish", "Save Or Update Success");
					return;
				}
				
				
				try {
					liquor.saveOrUpdateAsync(callback);
				} catch(de) {
					Log.error("GetLiquors", "onServiceRequestFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
				}
			}*/
		}		
		
		
		//populateHome();
	}

	this.onTerminate = function(serviceException) {
		//alert("onServiceTerminate");
	}
}



GetLiquors.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
GetLiquors.REQUEST_NAME = "GET-LIQUORS";


Function.extend(Service, GetLiquors);
