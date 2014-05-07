
function Service() {
	
	var requestId;
	
	var service;
	var api;
	
	var resources = new Dictionary();

	var serviceDescriptor;	
	
	
	/*
	 * IService APIs
	 */
	 
	this.getRequestId = function() {
		return requestId;
	}
	
	this.setRequestId = function(val) {
		requestId = val;
	}
	
	this.getService = function() {
		return service;
	}
	
	this.setService = function(val) {
		service = val;
	}
	
	this.getApi = function() {
		return api;
	}
	
	this.setApi = function(val) {
		api = val;
	}
	
	this.getServiceDescriptor = function() {
		return serviceDescriptor;
	}
	
	this.setServiceDescriptor = function(val) {
		serviceDescriptor = val;
	}
	
	this.invoke = function() {

		var serviceHandler = ServiceHandler.getInstance();
		try {
			serviceHandler.handle(this);
		} catch(se) {
			this.onServiceTerminate(se);
		}
	}
	
	
	/*
	 * IResource APIs
	 */
	
	this.getResources = function() {
		return resources.keys();
	} 
	
	this.getResource = function(val) {
		return resources.get(val);
	}
	
	this.addResource = function(key, value) {
		resources.add(key, value);
	}
	
	this.containResource = function(val) {
		return resources.exists(val);
	}
}