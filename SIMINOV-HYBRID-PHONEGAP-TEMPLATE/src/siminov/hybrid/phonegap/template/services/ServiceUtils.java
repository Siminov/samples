package siminov.hybrid.phonegap.template.services;

import siminov.hybrid.phonegap.library.template.CredentialManager;
import siminov.hybrid.phonegap.library.template.model.Credential;
import siminov.orm.exception.SiminovException;
import siminov.orm.log.Log;

public class ServiceUtils {

	public String getCompanyAlias() {

		Credential credential = CredentialManager.getInstance().getActiveCredential();
		if(credential == null) {
			Log.error(ServiceUtils.class.getName(), "getUrl", "Invalid Credential Found.");
			return "";
		}

		return credential.getAccountId();
	}
	
	public String getOAuthAuthorization(final String protocol, final String instance, final String context, final String api) throws SiminovException {
		return "";
	}
}
