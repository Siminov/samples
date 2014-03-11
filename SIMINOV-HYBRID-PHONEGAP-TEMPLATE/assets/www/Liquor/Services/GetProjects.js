
GetProjects.SERVICE_NAME = "GOPLAN-PROJECTS";
GetProjects.API_NAME = "GET-PROJECTS";

function GetProjects() {

	this.setService(GetProjects.SERVICE_NAME);
	this.setApi(GetProjects.API_NAME);
	
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


FunctionUtils.extend(Service, GetProjects);