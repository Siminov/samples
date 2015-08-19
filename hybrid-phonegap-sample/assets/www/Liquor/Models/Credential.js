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


function Credential() {

	//Class Variables.
	var accountId = null;
	var token = null;
	var active;

	this.getAccountId = function() {
		return accountId;
	}

	this.setAccountId = function(val) {
		accountId = val;
	}

	this.getToken = function() {
		return token;
	}

	this.setToken = function(val) {
		token = val;
	}

	this.getActive = function() {
		return active;
	}
	
	this.isActive = function() {
		return active;
	}

	this.setActive = function(val) {
		active = val;
	}
}


//Table Name
Credential.TABLE_NAME = "CREDENTIAL";


//Column Names
Credential.ACCOUNT_ID = "ACCOUNT_ID";
Credential.TOKEN = "TOKEN";
Credential.ACTIVE = "ACTIVE";


Function.extend(Database, Credential);
