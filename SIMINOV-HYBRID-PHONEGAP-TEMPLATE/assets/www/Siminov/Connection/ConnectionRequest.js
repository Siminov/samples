
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
