
function DeleteLiquor() {

	setService(DeleteLiquor.SERVICE_NAME);
	setApi(DeleteLiquor.API_NAME);
	
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


DeleteLiquor.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
DeleteLiquor.API_NAME = "DELETE-LIQUOR";

DeleteLiquor.LIQUOR_NAME = "LIQUOR_NAME";


FunctionUtils.extend(Service, DeleteLiquor);
