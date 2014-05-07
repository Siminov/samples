
function ICredential(credential) {

    return {

		getAccountId: credential.getAccountId,
		
		setAccountId: credential.setAccountId,
		
		getToken: credential.getToken,
		
		setToken: credential.setToken,
		
		isActive: credential.isActive,
	
		getActive: credential.getActive,
		
		setActive: credential.setActive
    }
}