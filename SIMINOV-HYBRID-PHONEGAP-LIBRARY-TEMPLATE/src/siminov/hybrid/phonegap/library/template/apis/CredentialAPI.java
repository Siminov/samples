package siminov.hybrid.phonegap.library.template.apis;

import siminov.hybrid.phonegap.library.template.model.Credential;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;

public class CredentialAPI {


	public void createAccount(String accountId, String token) throws DatabaseException {
		
		Credential credential = new Credential();
		credential.setAccountId(accountId);
		credential.setToken(token);
		credential.setActive(true);

		credential.save();
	}
	
	public boolean authenticateCredential(String accountId, String token) throws DatabaseException {
		
		Credential[] authentications = new Credential().select().where(Credential.ACCOUNT_ID).equalTo(accountId).execute();
		
		if(authentications == null || authentications.length <= 0) {
			Log.important(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
			throw new DatabaseException(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
		}

		return authentications[0].getToken().equals(token);
	}

	public boolean isAccountPresent() {
		try {
			Integer noOfAuthentications = (Integer) new Credential().count().execute();
			return noOfAuthentications > 0 ? true : false;
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "isAccountPresent", databaseException.getMessage());
		}
		
		return false;
	}
}
