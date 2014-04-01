package siminov.connect.template;

import java.util.Iterator;

import siminov.connect.design.authorization.ICredential;
import siminov.connect.design.authorization.ICredentialManager;
import siminov.connect.template.model.Credential;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;

public class CredentialManager implements ICredentialManager {

	public boolean isAnyActiveCredential() {

		try {
			Integer noOfCredentials = (Integer) new Credential().count().execute();
			return noOfCredentials > 0 ? true : false;
		} catch(DatabaseException databaseException) {
			Log.loge(getClass().getName(), "isAnyActiveCredential", databaseException.getMessage());
		}
		
		return false;
	}

	public ICredential getActiveCredential() {
		return null;
	}

	public Iterator<ICredential> getCredentials() {
		return null;
	}
}
