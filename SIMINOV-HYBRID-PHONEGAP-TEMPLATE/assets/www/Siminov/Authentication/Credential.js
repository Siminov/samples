

//Column Names
Credential.ACCOUNT_ID = "ACCOUNT_ID";
Credential.TOKEN = "TOKEN";

Credential.ACTIVE = "ACTIVE";


function Credential() {

	var accountId;
	var token;
	
	var active;
	
	var credentialResources = new Dictionary();
	
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
	
	this.isActive = function() {
		return active;
	}
	
	this.setActive = function(val) {
		active = val;
	}

	this.getCredentialResources = function() {
		return credentialResources.values();
	}
	
	this.getCredentialResource = function(credentialResourceName) {
		return credentialResources.get(credentialResourceName);
	}
	
	this.addCredentialResource = function(credentialResource) {
		credentialResources.put(credentialResource.getName(), credentialResource);
	}
	
	this.setCredentialResources = function(val) {
		credentialResources = val;
	}

	this.containCredentialResource = function(credentialResource) {
		return credentialResources.exists(credentialResource.getName());
	}
	
	this.removeCredentialResource = function(val) {
		credentialResources.remove(val.getName());
	}

	this.getInlineResources = function() {
		return credentialResources.keys();
	}

	this.getInlineResource = function(name) {
		return credentialResources.get(name);
	}

	this.addInlineResource = function(name, value) {
		
		var credentialResource = new CredentialResource();
		credentialResource.setName(name);
		credentialResource.setValue(value);
		
		credentialResource.setCredential(this);
		
		credentialResources.put(name, credentialResource);
	}

	this.containInlineResource = function(name) {
		return credentialResources.exists(name);
	}
}