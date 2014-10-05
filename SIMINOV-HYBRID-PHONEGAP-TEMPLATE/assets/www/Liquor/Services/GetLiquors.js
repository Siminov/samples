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
	
	this.onServiceStart = function() {
		//alert("onServiceStart");		
	}

	this.onServiceQueue = function() {
		//alert("onServiceQueue");
	}

	this.onServicePause = function() {
		//alert("onServicePause");
	}

	this.onServiceResume = function() {
		//alert("onServiceResume");
	}

	this.onServiceFinish = function() {
		//alert("onServiceFinish");
	}

	this.onServiceRequestInvoke = function(connectionRequest) {
		//alert("onServiceApiInvoke");
	}

	this.onServiceRequestFinish = function(connectionResponse) {
		//alert("onServiceApiFinish");

		var liquorsReader = new LiquorsReader();
		liquorsReader.parse(connectionResponse.getResponse());
		
		var liquors = liquorsReader.getLiquors();
		if(liquors != undefined && liquors != null && liquors.length > 0) {
			
			for(var i = 0;i < liquors.length;i++) {

				var liquor = liquors[i];
				
				try {
					liquor.saveOrUpdate();
				} catch(de) {
					Log.error("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
				}
			}
		}		
		
		
		populateHome();
	}

	this.onServiceTerminate = function(serviceException) {
		//alert("onServiceTerminate");
	}
}



GetLiquors.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
GetLiquors.REQUEST_NAME = "GET-LIQUORS";


Function.extend(Service, GetLiquors);
