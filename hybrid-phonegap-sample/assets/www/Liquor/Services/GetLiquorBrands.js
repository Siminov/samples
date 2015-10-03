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



function GetLiquorBrands() {

	this.setService(GetLiquorBrands.SERVICE_NAME);
	this.setRequest(GetLiquorBrands.REQUEST_NAME);
	
	this.onStart = function() {

	}

	this.onQueue = function() {
		
	}

	this.onPause = function() {
		
	}

	this.onResume = function() {
			
	}

	this.onFinish = function() {
		
	}

	this.onRequestInvoke = function(connectionRequest) {
	
	}

	this.onRequestFinish = function(connectionResponse) {
	
		if(connectionResponse.getResponse() == null) {
			return;
		}
		
		var liquorType = this.getResource(GetLiquorBrands.LIQUOR_NAME);

		
		var liquor;
		for(var i = 0;i < liquors.length;i++) {
			
			if(liquors[i].getLiquorType() === liquorType) {
				liquor = liquors[i];
			}
		}

		liquor.removeLiquorBrands();


		var liquorBrandsReader = new LiquorBrandsReader();
		liquorBrandsReader.parse(connectionResponse.getResponse());
		
		var liquorBrands = liquorBrandsReader.getLiquorBrands();


		var callback = new Callback();
		callback.onExecute = function(transaction) {
			
			for(var i = 0;i < liquorBrands.length;i++) {
				var liquorBrand = liquorBrands[i];
				liquorBrand.setLiquor(liquor);
				
				liquorBrand.saveOrUpdateAsync(saveCallback, transaction);
				
				var saveCallback = new Callback();
				saveCallback.onSuccess = function() {
					alert("liquor brand saved");
				}
			}
			
			
			liquor.updateAsync(updateCallback, transaction);
				
			var updateCallback = new Callback();
			updateCallback.onSuccess = function() {
				alert("liquor updated");
			}
			
			
            var selectCallback = new Callback();
            selectCallback.onSuccess = function(savedLiquors) {
            	alert("get liquors success" + savedLiquors);
            	Log.debug("Home", "populateHome", "Saved Liquors: " + savedLiquors);
            }
            
            new Liquor().select().executeAsync(selectCallback, transaction);
		}
		
		callback.onSuccess = function() {
			alert("Transaction Success");
			
			populateDetail(liquorType);
		}
		
		callback.onFailure = function() {
			alert("Trasaction Failure");
		}

		var databaseDescriptor = new LiquorBrand().getDatabaseDescriptor();
		Database.beginTransactionAsync(databaseDescriptor, callback);


		/*var callbackCount = 0;
		for(var i = 0;i < liquorBrands.length;i++) {
			var liquorBrand = liquorBrands[i];
			liquorBrand.setLiquor(liquor);
			
			var callback = new Callback();
			callback.onSuccess = function() {
				++callbackCount;
				
				if((callbackCount + 1) == liquorBrands.length) {
					Log.debug("GetLiquorBrands", "onRequestFinish", "Save Or Update Success: Populate Detail: " + callbackCount);
					
					populateDetail(liquorType);
				}
			
				Log.debug("GetLiquorBrands", "onRequestFinish", "Save Or Update Success");
				return;
			}
			
			try {
				liquorBrand.saveOrUpdateAsync(callback);
			} catch(de) {
				Log.error("GetLiquors", "onServiceRequestFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}*/
		

		for(var i = 0;i < liquorBrands.length;i++) {
			liquor.addLiquorBrand(liquorBrands[i]);
		}


		//populateDetail(liquorType);
	}

	this.onTerminate = function(serviceException) {
		
	}
}

GetLiquorBrands.SERVICE_NAME = "SIMINOV-HYBRID-LIQUOR-BRANDS-SERVICE";
GetLiquorBrands.REQUEST_NAME = "GET-LIQUOR-BRANDS";

GetLiquorBrands.LIQUOR_NAME = "LIQUOR-NAME";


Function.extend(Service, GetLiquorBrands);
