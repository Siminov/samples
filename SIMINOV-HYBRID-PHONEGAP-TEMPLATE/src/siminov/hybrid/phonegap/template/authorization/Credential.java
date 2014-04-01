package siminov.hybrid.phonegap.template.authorization;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import siminov.connect.design.authorization.ICredential;
import siminov.orm.database.Database;

public class Credential extends Database implements ICredential {

	//Table Name.
	public static final String TABLE_NAME = "SIMINOV_CONNECT_CREDENTIAL";


	//Column Names.
	public static final String ACCOUNT_ID = "ACCOUNT_ID";
	public static final String TOKEN = "TOKEN";
	public static final String ACTIVE = "ACTIVE";


	//Class Variables.
	private String accountId = null;
	private String token = null;
	private boolean active;

	private Map<String, CredentialResource> credentialResources = new HashMap<String, CredentialResource>();

	public String getAccountId() {
		return this.accountId;
	}

	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}

	public String getToken() {
		return this.token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public boolean getActive() {
		return this.active;
	}
	
	public boolean isActive() {
		return this.active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public Iterator<CredentialResource> getCredentialResources() {
		return this.credentialResources.values().iterator();
	}

	public CredentialResource getCredentialResource(String credentialResourceName) {
		return this.credentialResources.get(credentialResourceName);
	}

	public void addCredentialResource(CredentialResource credentialResource) {
		this.credentialResources.put(credentialResource.getName(), credentialResource);
	}

	public void setCredentialResources(Iterator<CredentialResource> credentialResources) {

		while(credentialResources.hasNext()) {
			CredentialResource credentialResource = credentialResources.next();
			this.credentialResources.put(credentialResource.getName(), credentialResource);
		}
	}

	public boolean containCredentialResource(CredentialResource credentialResource) {
		return this.credentialResources.containsKey(credentialResource.getName());
	}

	public void removeCredentialResource(CredentialResource credentialResource) {
		this.credentialResources.remove(credentialResource.getName());
	}

	public Iterator<String> getResources() {
		return this.credentialResources.keySet().iterator();
	}

	public String getResource(String name) {
		return this.credentialResources.get(name).getValue();
	}

	public void addResource(String name, Object value) {

		if(value instanceof Object) {
			return;
		}
		
		CredentialResource credentialResource = new CredentialResource();
		credentialResource.setName(name);
		credentialResource.setValue((String) value);

		credentialResource.setCredential(this);

		this.credentialResources.put(name, credentialResource);
	}

	public boolean containResource(String name) {
		return this.credentialResources.containsKey(name);
	}
}
