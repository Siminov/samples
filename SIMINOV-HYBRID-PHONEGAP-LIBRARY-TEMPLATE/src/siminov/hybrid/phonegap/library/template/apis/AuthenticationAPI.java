package siminov.hybrid.phonegap.library.template.apis;

import siminov.hybrid.phonegap.library.template.model.Authentication;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;

public class AuthenticationAPI {


	public void createAccount(String accountId, String token) throws DatabaseException {
		
		Authentication authentication = new Authentication();
		authentication.setAccountId(accountId);
		authentication.setToken(token);
		authentication.setActive(true);

		authentication.save();
	}
	
	public boolean authenticateCredential(String accountId, String token) throws DatabaseException {
		
		Authentication[] authentications = new Authentication().select().where(Authentication.ACCOUNT_ID).equalTo(accountId).execute();
		
		if(authentications == null || authentications.length <= 0) {
			Log.logi(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
			throw new DatabaseException(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
		}

		return authentications[0].getToken().equals(token);
	}

	public boolean isAccountPresent() {
		try {
			Integer noOfAuthentications = (Integer) new Authentication().count().execute();
			return noOfAuthentications > 0 ? true : false;
		} catch(DatabaseException databaseException) {
			Log.loge(getClass().getName(), "isAccountPresent", databaseException.getMessage());
		}
		
		return false;
	}
}
