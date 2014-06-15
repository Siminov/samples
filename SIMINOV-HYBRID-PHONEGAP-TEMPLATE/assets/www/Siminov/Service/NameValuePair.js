

function NameValuePair(val1, val2) {

	var name = val1;
	var value = val2;
	
	this.getName = function() {
		return name;
	}	
	
	this.setName = function(val) {
		name = val;
	}
	
	this.getValue = function() {
		return value;
	}
	
	this.setValue = function(val) {
		value = val;
	}
}