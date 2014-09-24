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


ConnectionRequest.NAME = "ConnectionRequest";

function ConnectionRequest() {

	var url;

	var protocol;
	var type;
	
	var queryParameters = new Dictionary();
	var headerParameters = new Dictionary();
	
	var dataStream;
	
	
	this.getUrl = function() {
		return url;
	}
	
	this.setUrl = function(value) {
		url = value;
	}

	this.getProtocol = function() {
		return protocol;
	}
	
	this.setProtocol = function(value) {
		protocol = value;
	}
	
	this.getType = function() {
		return type;
	}
	
	this.setType = function(value) {
		type = value;
	}
	
	this.getQueryParameters = function() {
		return queryParameters.keys();
	}
	
	this.getQueryParameter = function(value) {
		return queryParameters.get(value);
	}
	
	this.addQueryParameter = function(queryParameter) {
		queryParameters.add(queryParameter.getName(), queryParameter.getValue());
	}
	
	this.getHeaderParameters = function() {
		return headerParameters.keys();
	}
	
	this.getHeaderParameter = function(key) {
		return headerParameters.get(key);
	}

	this.addHeaderParameter = function(headerParameter) {
		headerParameters.add(headerParameter.getName(), headerParameter.getValue());
	}

	this.getDataStream = function() {
		return dataStream;
	}
	
	this.setDataStream = function(value) {
		dataStream = value;
	}
}
