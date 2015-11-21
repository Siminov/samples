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

var Log = require('../../Siminov/Log/Log');
var Function = require('../../Siminov/Function/Function');
var Service = require('../../Siminov/Service/Service');

var Liquor = require('../Models/Liquor');
var Constants = require('../Constants');
var LiquorWritter = require('../ReaderWritter/LiquorsReader');

module.exports = AddLiquor;


function AddLiquor() {

    Service.apply(this, arguments);
    
	this.setService(AddLiquor.SERVICE_NAME);
	this.setRequest(AddLiquor.REQUEST_NAME);
	
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
			Log.error("AddLiquor", "onServiceRequestInvoke", "Database Exception caught while getting liquor from database, " + de.getMessage());
			return;
		}
		
		
		var liquorWritter = new LiquorWritter();
		var dataStream = liquorWritter.build(liquor);
		
		connectionRequest.setDataStream(dataStream);
	}

	this.onRequestFinish = function(connectionResponse) {
		
	}

	this.onTerminate = function(serviceException) {
		
	}
}



AddLiquor.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
AddLiquor.REQUEST_NAME = "ADD-LIQUOR";

AddLiquor.LIQUOR = "LIQUOR";


Function.extend(Service, AddLiquor);
