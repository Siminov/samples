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

package siminov.connect.template;

import siminov.connect.authorization.AuthorizationFactory;
import siminov.connect.design.authorization.IAuthorization;
import siminov.connect.design.authorization.ICredentialManager;
import siminov.connect.exception.AuthorizationException;
import siminov.connect.notification.NotificationManager;
import siminov.connect.template.authorization.Credential;
import siminov.connect.template.authorization.CredentialManager;
import siminov.orm.IInitializer;
import android.app.Application;

public class Siminov extends Application {

	public void onCreate() { 
		super.onCreate();

		initializeSiminov();
		//initializeNotificationService();
		doAuthorization();
	}
	
	private void initializeSiminov() {
		
		IInitializer initializer = siminov.connect.Siminov.initializer();
		initializer.addParameter(this);
		
		initializer.initialize();
	}
	
	
	private void initializeNotificationService() {
		
		NotificationManager notificationManager = NotificationManager.getInstance();
		notificationManager.doRegistration();
	}
	
	private void doAuthorization() {

		Credential credential = new Credential();
		credential.setAccountId("pranavchauhan01");
		credential.setActive(true);
		
		ICredentialManager credentialManager = new CredentialManager();
		credentialManager.setActiveCredential(credential);
		
		
		AuthorizationFactory authorizationFactory = AuthorizationFactory.getInstance();
		IAuthorization authorization = authorizationFactory.getAuthorization();
	
		try {
			authorization.doAuthentication();
		} catch(AuthorizationException ae) {
			
		}
	}
}
