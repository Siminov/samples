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

package siminov.orm.library.template.model;

import siminov.orm.annotation.Column;
import siminov.orm.annotation.ColumnProperty;
import siminov.orm.annotation.Table;
import siminov.orm.database.Database;


@Table(tableName=Credential.TABLE_NAME)
public class Credential extends Database {

	//Table Name.
	public static final String TABLE_NAME = "CREDENTIAL";
	
	//Column Names.
	public static final String ACCOUNT_ID = "ACCOUNT_ID";
	public static final String CREDENTIAL_TYPE = "CREDENTIAL_TYPE";
	public static final String TOKEN = "TOKEN";
	public static final String LOGGED = "LOGGED";
	
	//Credential Types.
	public static final String CREDENTIAL_TYPE_SIMINOV = "SIMINOV";
	
	//Class Variables.

	@Column(columnName=ACCOUNT_ID,
		properties={
			@ColumnProperty(name=ColumnProperty.PRIMARY_KEY, value="true"),
			@ColumnProperty(name=ColumnProperty.NOT_NULL, value="true"), 
			@ColumnProperty(name=ColumnProperty.UNIQUE, value="true"),
			})
	private String accountId = null;

	@Column(columnName=CREDENTIAL_TYPE,
		properties={
			@ColumnProperty(name=ColumnProperty.PRIMARY_KEY, value="true"),
			@ColumnProperty(name=ColumnProperty.NOT_NULL, value="true"), 
			@ColumnProperty(name=ColumnProperty.UNIQUE, value="true")
			})
	private String credentialType = null;
	
	@Column(columnName=TOKEN,
		properties={
			@ColumnProperty(name=ColumnProperty.NOT_NULL, value="true"), 
			@ColumnProperty(name=ColumnProperty.UNIQUE, value="true")
			})
	private String token = null;
	
	@Column(columnName=LOGGED)
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
