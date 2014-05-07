
function ICredentialManager(credentialManager) {

    return {

		isAnyActiveCredential: credentialManager.isAnyActiveCredential,	
	
		getActiveCredential: credentialManager.getActiveCredential,	
		
		setActiveCredential: credentialManager.setActiveCredential,
		
		getCredentials: credentialManager.getCredentials
    }
}