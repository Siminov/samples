

function Credential() {

	//Class Variables.
	var accountId = null;
	var token = null;
	var active;

	getAccountId = function() {
		return accountId;
	}

	setAccountId = function(val) {
		accountId = val;
	}

	getToken = function() {
		return token;
	}

	setToken = function(val) {
		token = val;
	}

	getActive = function() {
		return active;
	}
	
	isActive = function() {
		return active;
	}

	setActive = function(val) {
		active = val;
	}
}


Credential.ACCOUNT_ID = "ACCOUNT_ID";
Credential.TOKEN = "TOKEN";
Credential.ACTIVE = "ACTIVE";


FunctionUtils.extend(Database, Credential);

