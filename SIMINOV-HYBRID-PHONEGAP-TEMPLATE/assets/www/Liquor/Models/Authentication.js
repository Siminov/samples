

function Authentication() {
	
	var accountId;
	var credentialType;
	var token;
	var logged;
	
	this.getAccountId = function() {
		return accountId;
	}	
	
	this.setAccountId = function(val) {
		accountId = val;
	}
	
	this.getCredentialType = function() {
		return credentialType;
	}
	
	this.setCredentialType = function(val) {
		credentialType = val;
	}
	
	this.getToken = function() {
		return token;
	}
	
	this.setToken = function(val) {
		token = val;
	}
	
	this.getLogged = function() {
		return logged;
	}
	
	this.setLogged = function(val) {
		return logged;
	}
}


FunctionUtils.extend(Database, Authentication);