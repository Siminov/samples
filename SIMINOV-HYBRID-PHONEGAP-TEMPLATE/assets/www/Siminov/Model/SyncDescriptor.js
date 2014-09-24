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



function SyncDescriptor() {

	var properties = new Dictionary();
	
	var services = new Array();

	this.getName = function() {
		return properties.get(Constants.SYNC_DESCRIPTOR_NAME);
	}
	
	this.setName = function(name) {
		properties.put(Constants.SYNC_DESCRIPTOR_NAME, name);
	}
	
	this.getSyncInterval = function() {
		return properties.get(Constants.SYNC_DESCRIPTOR_REFRESH_INTERVAL);
	}
	
	this.setSyncInterval = function(syncInterval) {
		properties.put(Constants.SYNC_DESCRIPTOR_REFRESH_INTERVAL, syncInterval);	
	}
	
	this.getProperties = function() {
		return properties.values();		
	}
	
	this.getProperty = function(name) {
		return properties.get(name);
	}
	
	this.containProperty = function(name) {
		return properties.exists(name);
	}
	
	this.addProperty = function(name, value) {
		properties.add(name, value);
	}
	
	this.removeProperty = function(name) {
		properties.remove(name);
	}
	
	this.getServices = function() {
		return services;
	}
	
	this.addService = function(service) {
		services.push(service);
	}
}