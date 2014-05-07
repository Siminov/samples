

function AuthenticationEventHandler() {

	this.onAuthenticationStart = function(credential) {
		alert("onAuthenticationStart");		
	}

	this.onAuthenticationFinish = function(credential) {
		alert("onAuthenticationFinish");
	}

	this.onAuthenticationTerminate = function(credential) {
		alert("onAuthenticationTerminate");
	}
}
