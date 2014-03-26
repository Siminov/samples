
ConnectionRequest.NAME = "ConnectionRequest";

function ConnectionRequest() {

	var url;

	var protocol;
	var type;
	
	var queryParameters = new Array();
	var headerParameters = new Array();
	
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
		return queryParameters;
	}
	
	this.getQueryParameter = function(value) {
		return queryParameters.get(value);
	}
	
	this.setQueryParameters = function(value) {
		queryParameters = value;
	}
	
	this.addQueryParameter = function(key, value) {
		queryParameters.put(key, value);
	}
	
	this.getHeaderParameters = function() {
		return headerParameters;
	}
	
	this.getHeaderParameter = function(key) {
		return headerParameters.get(key);
	}

	this.setHeaderParameters = function(value) {
		headerParameters = value;
	}
	
	this.addHeaderParameter = function(key, value) {
		headerParameters.put(key, value);
	}

	this.getDataStream = function() {
		return dataStream;
	}
	
	this.setDataStream = function(value) {
		dataStream = value;
	}
}
