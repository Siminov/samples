/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

package siminov.orm.library.template.apis;

import siminov.orm.exception.DatabaseException;
import siminov.orm.library.template.model.Credential;
import siminov.orm.log.Log;

public class CredentialAPI {

	public void createAccount(String accountId, String token) throws DatabaseException {
		
		Credential credential = new Credential();
		credential.setCredentialType(Credential.CREDENTIAL_TYPE_SIMINOV);
		credential.setAccountId(accountId);
		credential.setToken(token);
		credential.setLogged("true");

		credential.save();
	}
	
	public boolean authenticateCredential(String accountId, String token) throws DatabaseException {
		
		Credential[] credentials = new Credential().select().where(Credential.ACCOUNT_ID).equalTo(accountId).execute();
		
		if(credentials == null || credentials.length <= 0) {
			Log.important(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
			throw new DatabaseException(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
		}

		return credentials[0].getToken().equals(token);
	}

	public boolean isAccountPresent() {
		try {
			Integer noOfCredentials = (Integer) new Credential().count().execute();
			return noOfCredentials > 0 ? true : false;
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "isAccountPresent", databaseException.getMessage());
		}
		
		return false;
	}
}
