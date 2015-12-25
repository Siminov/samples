
var win;
var dom;

try {

    if(!window) {
    	window = global || window;
    }

	win = window;
	dom = window['document'];
} catch(e) {
	win = Ti.App.Properties;
}


if(dom == undefined) {
    var Dictionary = require('../Collection/Dictionary');
    
    module.exports = Transaction;    
}


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