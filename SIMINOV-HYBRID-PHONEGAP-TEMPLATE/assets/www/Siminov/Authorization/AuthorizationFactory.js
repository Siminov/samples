

var AuthorizationFactory = (function() {

	var authorizationFactory;
	
	return {
	
		getInstance : function() {
			if(authorizationFactory == null) {
				authorizationFactory = new AuthorizationFactory();
				
				authorizationFactory.constructor = null;
			}
			
			return authorizationFactory;
		}
	
	}
	

	function AuthorizationFactory() {
	
		this.getAuthorization = function() {
		}
	}
		
}) ();
