

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
		return resources.values();
	}

	this.getResource = function(val) {
		
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
