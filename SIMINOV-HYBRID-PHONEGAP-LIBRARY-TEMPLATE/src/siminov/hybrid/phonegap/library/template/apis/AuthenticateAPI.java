/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution LLP|support@siminov.com]
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

package siminov.hybrid.phonegap.library.template.apis;

import siminov.hybrid.phonegap.library.template.model.Authentication;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;

public class AuthenticateAPI {

	public void createAccount(String accountId, String token) throws DatabaseException {
		
		Authentication authentication = new Authentication();
		authentication.setCredentialType(Authentication.CREDENTIAL_TYPE_SIMINOV);
		authentication.setAccountId(accountId);
		authentication.setToken(token);
		authentication.setLogged("true");

		authentication.save();
	}
	
	public boolean authenticateCredential(String accountId, String token) throws DatabaseException {
		
		Authentication[] authentications = (Authentication[]) new Authentication().select().where(Authentication.ACCOUNT_ID).equalTo(accountId).fetch();
		
		if(authentications == null || authentications.length <= 0) {
			Log.logi(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
			throw new DatabaseException(getClass().getName(), "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
		}

		return authentications[0].getToken().equals(token);
	}

	public boolean isAccountPresent() {
		try {
			Integer noOfCredentials = (Integer) new Authentication().count().execute();
			return noOfCredentials > 0 ? true : false;
		} catch(DatabaseException databaseException) {
			Log.loge(getClass().getName(), "isAccountPresent", databaseException.getMessage());
		}
		
		return false;
	}
	
}
