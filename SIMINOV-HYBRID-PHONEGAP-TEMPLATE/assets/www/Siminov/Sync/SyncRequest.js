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



function SyncRequest() {

	var name;
	
	var resources = new Dictionary();
	
	this.getName = function() {
		return name;
	}
	
	this.setName = function(val) {
		name = val;
	}
	
	this.getResources = function() {
		return resources.values();
	}

	this.getResource = function(val) {
		
		var resource = resources.get(name);
		if(resource == undefined || resource == null) {
			return null;
		}

		return resource.getValue();
	}

	this.addResource = function(nameValuePair) {
		resources.add(nameValuePair.getName(), nameValuePair);
	}

	this.addNameValuePair = function(nameValuePair) {
		resources.add(nameValuePair.getName(), nameValuePair);
	}

	this.containResource = function(nameValuePair) {
		return resources.exists(nameValuePair.getName());
	}
}
