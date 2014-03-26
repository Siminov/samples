

Message.NAME = "Message";

function Message() {

	var message;
	
	this.getMessage = function() {
		return message;
	}

	this.setMessage = function(value) {
		message = value;
	}
}
