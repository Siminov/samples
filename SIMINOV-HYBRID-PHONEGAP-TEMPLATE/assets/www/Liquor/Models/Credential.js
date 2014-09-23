
function Credential() {

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
Credential.TABLE_NAME = "CREDENTIAL";


//Column Names
Credential.ACCOUNT_ID = "ACCOUNT_ID";
Credential.TOKEN = "TOKEN";
Credential.ACTIVE = "ACTIVE";


FunctionUtils.extend(Database, Credential);
