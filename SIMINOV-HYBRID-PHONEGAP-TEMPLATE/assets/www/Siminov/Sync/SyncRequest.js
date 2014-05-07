

function SyncRequest() {

	var name;
	
	var resources = new Dictionary();
	
	this.getName = function() {
		return name;
	}
	
	this.setName = function(val) {
		name = val;
	}
	
	this.getResources = function() {
		return resources;
	}

	this.getResource = function(val) {
		return resources.get(val);
	}

	this.addResource = function(name, value) {
		resources.add(name, value);
	}

	this.containResource = function(name) {
		return resources.exists(name);
	}
}
