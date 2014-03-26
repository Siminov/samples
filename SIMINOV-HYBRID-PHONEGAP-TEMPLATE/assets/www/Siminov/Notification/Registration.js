
Registration.NAME = "Registration";

function Registration() {

	var registrationId;
	
	this.getRegistrationId = function() {
		return registrationId;
	}
	
	this.setRegistrationId = function(val) {
		registrationId = val;		
	}
}