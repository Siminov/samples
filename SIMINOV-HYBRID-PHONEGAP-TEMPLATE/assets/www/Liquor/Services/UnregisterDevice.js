
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
