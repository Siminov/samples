
GetProjects.SERVICE_NAME = "GOPLAN-PROJECTS";
GetProjects.API_NAME = "GET-PROJECTS";

function GetProjects() {

	this.setService(GetProjects.SERVICE_NAME);
	this.setApi(GetProjects.API_NAME);
	
	this.onServiceStart = function() {
		alert("onServiceStart");
	}

	this.onServiceQueue = function() {
		alert("onServiceQueue");
	}

	this.onServicePause = function() {
		alert("onServicePause");
	}

	this.onServiceResume = function() {
		alert("onServiceResume");
	}

	this.onServiceFinish = function() {
		alert("onServiceFinish");
	}

	this.onServiceApiInvoke = function(connectionRequest) {
		alert("onServiceApiInvoke");
	}

	this.onServiceApiFinish = function(connectionResponse) {
		alert("onServiceApiFinish");
	}

	this.onServiceTerminate = function(serviceException) {
		alert("onServiceTerminate");
	}
}


FunctionUtils.extend(Service, GetProjects);