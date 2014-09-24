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


function UnregisterDevice() {

	setService(UnregisterDevice.SERVICE_NAME);
	setApi(UnregisterDevice.API_NAME);
	
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

	this.onServiceApiInvoke = function(connectionRequest) {
		
	}

	this.onServiceApiFinish = function(connectionResponse) {
		
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}



UnregisterDevice.SERVICE_NAME = "SIMINOV-HYBRID-NOTIFICATION-SERVICE";
UnregisterDevice.API_NAME = "UNREGISTER-DEVICE";


FunctionUtils.extend(Service, RegisterDevice);
