/**
 * [SIMINOV FRAMEWORK]
 * Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
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


package siminov.core.library.sample.model;

import siminov.core.database.Database;


public class Credential extends Database {

	//Table Name.
	public static final String TABLE_NAME = "CONNECT-CREDENTIAL";
	
	//Column Names.
	public static final String ACCOUNT_ID = "ACCOUNT_ID";
	public static final String CREDENTIAL_TYPE = "CREDENTIAL_TYPE";
	public static final String TOKEN = "TOKEN";
	public static final String LOGGED = "LOGGED";
	
	//Credential Types.
	public static final String CREDENTIAL_TYPE_SIMINOV = "SIMINOV";
	
	//Class Variables.

	private String accountId = null;
	private String credentialType = null;
	private String token = null;
	private String logged = null;
	
	public String getAccountId() {
		return this.accountId;
	}
	
	public void setAccountId(String accountId) {
		this.accountId = accountId;
	}
	
	public String getCredentialType() {
		return this.credentialType;
	}
	
	public void setCredentialType(String credentialType) {
		this.credentialType = credentialType;
	}
	
	public String getToken() {
		return this.token;
	}
	
	public void setToken(String token) {
		this.token = token;
	}
	
	public String getLogged() {
		return this.logged;
	}
	
	public void setLogged(String logged) {
		this.logged = logged;
	}
	
	public boolean isLogged() {
		String logged = getLogged();
		if(logged == null || logged.length() <= 0) {
			return false;
		}
		
		if(logged.equalsIgnoreCase("true")) {
			return true;
		} 
		
		return false;
	}
}
