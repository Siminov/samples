package siminov.connect.template.model;

import siminov.orm.database.Database;


public class Credential extends Database {

	//Column Names.
	public static final String ACCOUNT_ID = "ACCOUNT_ID";
	public static final String TOKEN = "TOKEN";
	public static final String ACTIVE = "ACTIVE";


	//Class Variables.
	private String accountId = null;
	private String token = null;
	private boolean active;

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
}
