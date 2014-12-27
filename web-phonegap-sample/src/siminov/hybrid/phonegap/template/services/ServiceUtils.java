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
