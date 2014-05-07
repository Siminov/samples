

var CredentialManager = (function() {

	var credentialManager;
	
	return {
	
		getInstance : function() {
			if(credentialManager == null) {
				credentialManager = new CredentialManager();
				
				credentialManager.constructor = null;
			}
			
			return credentialManager;
		}
	
	}
	

	function CredentialManager() {
	
		this.isAnyActiveCredential = function() {

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENICATION_ADAPTER_IS_ANY_ACTIVE_CREDENTIAL_HANDLER);

			adapter.invoke();
		}
	
		this.getActiveCredential = function() {

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENICATION_ADAPTER_GET_ACTIVE_CREDENTIAL_HANDLER);

			adapter.invoke();
		}
	
		this.getCredentials = function() {
	
	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENTICATION_ADAPTER_GET_CREDENTIALS_HANDLER);

			adapter.invoke();
		}
	
		this.setActiveCredential = function(credential) {
			
		}
	}
		
}) ();
