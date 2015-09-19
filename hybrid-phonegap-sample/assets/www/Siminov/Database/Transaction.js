
function Transaction() {
	
	var requests = new Dictionary();

	
	this.getRequests = function() {
		return requests.values();
	}
	
	this.getRequest = function(requestId) {
		return requests.get(requestId);
	}
	
	this.addRequest = function(adapter) {
		requests.add(adapter.getRequestId(), adapter);
	}
	
	this.removeRequest = function(requestId) {
		requests.remove(requestId);
	}
		
	this.containRequest = function(requestId) {
		return requests.exists(requestId);
	}
}