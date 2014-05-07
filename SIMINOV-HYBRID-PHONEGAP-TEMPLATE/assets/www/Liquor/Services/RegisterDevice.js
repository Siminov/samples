
function RegisterDevice() {

	setService(RegisterDevice.SERVICE_NAME);
	setApi(RegisterDevice.API_NAME);
	
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



RegisterDevice.SERVICE_NAME = "SIMINOV-HYBRID-NOTIFICATION-SERVICE";
RegisterDevice.API_NAME = "REGISTER-DEVICE";

RegisterDevice.REGISTRATION_ID = "ID";


FunctionUtils.extend(Service, RegisterDevice);
