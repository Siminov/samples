

function SyncRequest() {

	var name;
	
	var inlineResources = new Dictionary();
	
	this.getName = function() {
		return name;
	}
	
	this.setName = function(val) {
		name = val;
	}
	
	this.getInlineResources = function() {
		return inlineResources;
	}

	this.getInlineResource = function(val) {
		return inlineResources.get(val);
	}

	this.addInlineResource = function(name, value) {
		inlineResources.add(name, value);
	}

	this.containInlineResource = function(name) {
		return inlineResources.exists(name);
	}
}
