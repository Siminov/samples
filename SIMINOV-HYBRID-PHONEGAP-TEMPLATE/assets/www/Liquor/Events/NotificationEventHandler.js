

function NotificationEventHandler() {
	
	this.onRegistration = function(registration) {
		//alert("onRegistration");
	}

	this.onUnregistration = function(registration) {
		//alert("onUnregistration");
	}

	this.onNotification = function(message) {
		//alert("onNotification");
	}
	
	this.onError = function(notificationException) {
		//alert("onError");
	}
}