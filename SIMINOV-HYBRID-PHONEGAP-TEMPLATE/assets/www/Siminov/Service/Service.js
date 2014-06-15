
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
			alert(se);
			this.onServiceTerminate(se);
		}
	}
	
	
	/*
	 * IResource APIs
	 */
	
	this.getResources = function() {
		return resources.values();
	} 
	
	this.getResource = function(name) {
		
		var resource = resources.get(name);
		if(resource == undefined || resource == null) {
			return null;
		}
		
		return resource.getValue();
	}
	
	this.addResource = function(nameValuePair) {
		resources.add(nameValuePair.getName(), nameValuePair);
	}

	this.addNameValuePair = function(nameValuePair) {
		resources.add(nameValuePair.getName(), nameValuePair);
	}

	this.containResource = function(nameValuePair) {
		return resources.exists(nameValuePair.getName());
	}
}