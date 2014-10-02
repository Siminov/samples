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

	setService(GetLiquorBrands.SERVICE_NAME);
	setRequest(GetLiquorBrands.REQUEST_NAME);
	
	this.onServiceStart = function() {

	}

	this.onServiceQueue = function() {
		
	}

	this.onServicePause = function() {
		
	}

	this.onServiceResume = function() {
			
	}

	this.onServiceFinish = function() {
		
	}

	this.onServiceRequestInvoke = function(connectionRequest) {
	
	}

	this.onServiceRequestFinish = function(connectionResponse) {
	
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

		for(var i = 0;i < liquorBrands.length;i++) {
			var liquorBrand = liquorBrands[i];
			liquorBrand.setLiquor(liquor);
			
			try {
				liquorBrand.saveOrUpdate();
			} catch(de) {
				Log.error("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}
		

		for(var i = 0;i < liquorBrands.length;i++) {
			liquor.addLiquorBrand(liquorBrands[i]);
		}


		populateDetail(liquorType);
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}

GetLiquorBrands.SERVICE_NAME = "SIMINOV-HYBRID-LIQUOR-BRANDS-SERVICE";
GetLiquorBrands.REQUEST_NAME = "GET-LIQUOR-BRANDS";

GetLiquorBrands.LIQUOR_NAME = "LIQUOR-NAME";


Function.extend(Service, GetLiquorBrands);
