
function Authentication() {

	//Class Variables.
	var accountId = null;
	var token = null;
	var active;

	this.getAccountId = function() {
		return accountId;
	}

	this.setAccountId = function(val) {
		accountId = val;
	}

	this.getToken = function() {
		return token;
	}

	this.setToken = function(val) {
		token = val;
	}

	this.getActive = function() {
		return active;
	}
	
	this.isActive = function() {
		return active;
	}

	this.setActive = function(val) {
		active = val;
	}
}


//Table Name
Authentication.TABLE_NAME = "CREDENTIAL";


//Column Names
Authentication.ACCOUNT_ID = "ACCOUNT_ID";
Authentication.TOKEN = "TOKEN";
Authentication.ACTIVE = "ACTIVE";


FunctionUtils.extend(Database, Authentication);
