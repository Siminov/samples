

var AuthenticationFactory = (function() {

	var authenticationFactory;
	
	return {
	
		getInstance : function() {
			if(authenticationFactory == null) {
				authenticationFactory = new AuthenticationFactory();
				
				authenticationFactory.constructor = null;
			}
			
			return authenticationFactory;
		}
	
	}
	

	function AuthenticationFactory() {
		
		this.getAuthenticate = function(credential) {
			
			
		}		
	}
		
}) ();
