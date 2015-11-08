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

if(window['document'] == undefined) {
    var ISyncEvents = require('../../Siminov/Events/ISyncEvents');
    var Function = require('../../Siminov/Function/Function');
    
    module.exports = SyncEventHandler;    
}


function SyncEventHandler() {
	
	this.onSyncStarted = function(syncRequest) {
		//alert("onSyncStarted");
	}

	
	this.onSyncQueued = function(syncRequest) {
		//alert("onSyncQueued");
	}

	
	this.onSyncRemoved = function(syncRequest) {
		//alert("onSyncRemoved");
	}

	
	this.onSyncTerminated = function(syncRequest) {
		//alert("onSyncTerminated");
	}
}


Function.implement(ISyncEvents, SyncEventHandler);