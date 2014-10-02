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




function AddLiquor() {

	setService(AddLiquor.SERVICE_NAME);
	setRequest(AddLiquor.REQUEST_NAME);
	
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
		
		if(connectionRequest.getDataStream() == null) {
			return;
		}
		
		
		var liquorType = getResource(AddLiquor.LIQUOR);
		var liquor = null;
		
		try {
			var liquors = new Liquor().select().where(Liquor.LIQUOR_TYPE).equalTo(liquorType).execute();
			if(liquors != null && liquors.length > 0) {
				liquor = liquors[0];
			}
		} catch(de) {
			Log.error("AddLiquor", "onServiceApiInvoke", "Database Exception caught while getting liquor from database, " + de.getMessage());
			return;
		}
		
		
		var liquorWritter = new LiquorWritter();
		var dataStream = liquorWritter.build(liquor);
		
		connectionRequest.setDataStream(dataStream);
	}

	this.onServiceRequestFinish = function(connectionResponse) {
		
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}



AddLiquor.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
AddLiquor.REQUEST_NAME = "ADD-LIQUOR";

AddLiquor.LIQUOR = "LIQUOR";


Function.extend(Service, AddLiquor);
