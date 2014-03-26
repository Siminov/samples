package siminov.hybrid.phonegap.template.authorization;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import siminov.connect.authorization.design.ICredential;
import siminov.connect.authorization.design.ICredentialManager;
import siminov.orm.exception.SiminovCriticalException;
import siminov.orm.exception.SiminovException;
import siminov.orm.log.Log;
import siminov.orm.utils.EmptyIterator;

public class CredentialManager implements ICredentialManager {

	public CredentialManager() {

	}

	public boolean isAnyActiveCredential() {

		int activeAccountCount = 0;

		try {
			activeAccountCount = (Integer) new Credential().count().where(Credential.ACTIVE).equalTo(true).execute();
		} catch(SiminovException se) {
			Log.loge(CredentialManager.class.getName(), "isAnyActiveCredential", "SiminovException caught while getting active account count, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "isAnyActiveCredential", "SiminovException caught while getting active account count, " + se.getMessage());
		}


		if(activeAccountCount <= 0) {
			return false;
		} else {
			return true;
		}
	}

	public Credential getActiveCredential() {

		Credential[] credentials = null;
		try {
			credentials = (Credential[]) new Credential().select().
					where(Credential.ACTIVE).equalTo(true).
					fetch();
		} catch(SiminovException se) {
			Log.loge(CredentialManager.class.getName(), "getActiveCredential", "SiminovException caught while getting active account, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getActiveCredential", "SiminovException caught while getting active account, " + se.getMessage());
		}

		if(credentials == null || credentials.length <= 0) {
			Log.loge(CredentialManager.class.getName(), "getActiveCredential", "No Account Found.");
			return null;
		}


		if(credentials.length > 1) {
			Log.loge(CredentialManager.class.getName(), "getActiveCredential", "More Then One Active Account Found.");
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getActiveCredential", "More Then One Active Account Found.");
		}


		return credentials[0];
	}

	public Iterator<ICredential> getCredentials() {

		ICredential[] credentials = null;
		try {
			credentials = (ICredential[]) new Credential().select().
					where(Credential.ACTIVE).equalTo(true).
					fetch();
		} catch(SiminovException se) {
			Log.loge(CredentialManager.class.getName(), "getCredentials", "SiminovException caught while getting active account, " + se.getMessage());
			throw new SiminovCriticalException(CredentialManager.class.getName(), "getCredentials", "SiminovException caught while getting active account, " + se.getMessage());
		}

		if(credentials == null || credentials.length <= 0) {
			Log.logd(CredentialManager.class.getName(), "getCredentials", "No Account Found.");
			return new EmptyIterator<ICredential>();
		}


		Collection<ICredential> accounts = new ArrayList<ICredential>();
		for(int i = 0;i < credentials.length;i++) {
			accounts.add(credentials[i]);
		}

		return accounts.iterator();
	}
}
