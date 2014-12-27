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

package siminov.hybrid.phonegap.library.template;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import siminov.hybrid.phonegap.library.template.model.Credential;
import siminov.orm.exception.SiminovCriticalException;
import siminov.orm.exception.SiminovException;
import siminov.orm.log.Log;
import siminov.orm.resource.ResourceManager;
import siminov.orm.utils.ClassUtils;
import siminov.orm.utils.EmptyIterator;

public class CredentialManager {

	private static CredentialManager credentialManager = null;
	
	private Credential activeCredential = null;
	
	private CredentialManager() {
		
	}
	
	public static CredentialManager getInstance() {
		
		if(credentialManager == null) {
			credentialManager = new CredentialManager();
		}
		
		return credentialManager;
	}
	
	
	public boolean isAnyActiveCredential() {

		Credential credential = (Credential) ClassUtils.createClassInstance(Credential.class.getName());
		if(credential == null) {
			Log.error(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			throw new SiminovCriticalException(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
		}
		
		
		int activeAccountCount = 0;

		try {
			activeAccountCount = (Integer) credential.count().where(Credential.ACTIVE).equalTo(true).execute();
		} catch(SiminovException se) {
			Log.error(CredentialManager.class.getName(), "isAnyActiveCredential", "SiminovException caught while getting active account count, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "isAnyActiveCredential", "SiminovException caught while getting active account count, " + se.getMessage());
		}


		if(activeAccountCount <= 0) {
			return false;
		} else {
			return true;
		}
	}

	public Credential getActiveCredential() {

		Credential credential = (Credential) ClassUtils.createClassInstance(Credential.class.getName());
		if(credential == null) {
			Log.error(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			throw new SiminovCriticalException(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
		}

		
		if(activeCredential != null) {
			return activeCredential;
		}
		
		
		Credential[] credentials = null;
		try {
			credentials = (Credential[]) credential.select().
					where(Credential.ACTIVE).equalTo(true).
					execute();
		} catch(SiminovException se) {
			Log.error(CredentialManager.class.getName(), "getActiveCredential", "SiminovException caught while getting active account, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getActiveCredential", "SiminovException caught while getting active account, " + se.getMessage());
		}

		if(credentials == null || credentials.length <= 0) {
			Log.error(CredentialManager.class.getName(), "getActiveCredential", "No Account Found.");
			return null;
		}


		if(credentials.length > 1) {
			Log.error(CredentialManager.class.getName(), "getActiveCredential", "More Then One Active Account Found.");
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getActiveCredential", "More Then One Active Account Found.");
		}


		activeCredential = credentials[0];
		return activeCredential;
	}

	public Iterator<Credential> getCredentials() {

		Credential credential = (Credential) ClassUtils.createClassInstance(Credential.class.getName());
		if(credential == null) {
			Log.error(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			throw new SiminovCriticalException(CredentialManager.class.getName(), "isAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
		}

		
		Credential[] credentials = null;
		try {
			credentials = (Credential[]) credential.select().
					where(Credential.ACTIVE).equalTo(true).
					execute();
		} catch(SiminovException se) {
			Log.error(CredentialManager.class.getName(), "getCredentials", "SiminovException caught while getting active account, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getCredentials", "SiminovException caught while getting active account, " + se.getMessage());
		}

		if(credentials == null || credentials.length <= 0) {
			Log.debug(CredentialManager.class.getName(), "getCredentials", "No Account Found.");
			return new EmptyIterator<Credential>();
		}


		Collection<Credential> accounts = new ArrayList<Credential>();
		for(int i = 0;i < credentials.length;i++) {
			accounts.add(credentials[i]);
		}

		return accounts.iterator();
	}

	public void setActiveCredential(Credential credential) {
		
	}
}