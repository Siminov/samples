
ConnectionResponse.NAME = "ConnectionResponse";

function ConnectionResponse() {

	var statusCode;
	var statusMessage;

	var response;
	
	this.getStatusCode = function() {
		return statusCode;
	}
	
	this.setStatusCode = function(value) {
		statusCode = value;
	}
	
	this.getStatusMessage = function() {
		return statusMessage;
	}
	
	this.setStatusMessage = function(value) {
		statusMessage = value;
	}
	
	this.getResponse = function() {
		return response;
	}
	
	this.setResponse = function(value) {
		response = value;
	}
}
