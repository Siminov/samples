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

package siminov.connect.template.fragments;

import siminov.connect.authorization.CredentialManager;
import siminov.connect.authorization.design.ICredential;
import siminov.connect.template.R;
import siminov.connect.template.model.Credential;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class Login extends Fragment implements OnClickListener {

	private boolean isAccountPresent = false;
	
	private final int CREATE_OR_LOGIN_KEY = 1;
	private final int CANCEL_KEY = 2;
	
	private TextView accountId = null;
	private TextView token = null;
	
	private Button createOrLogin = null;
	private Button cancel = null;
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	}

	public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
		View view = inflater.inflate(R.layout.login_artist, null);
		
		TextView loginNote = (TextView) view.findViewById(R.id.login_note);
		isAccountPresent = CredentialManager.getInstance().isAnyActiveCredential();
		
		accountId = (TextView) view.findViewById(R.id.account_id);
		token = (TextView) view.findViewById(R.id.token);
		
		createOrLogin = (Button) view.findViewById(R.id.create_or_login);
		cancel = (Button) view.findViewById(R.id.cancel);

		if(isAccountPresent) {
			loginNote.setText(R.string.login_with_your_credentials);
			createOrLogin.setText(R.string.login);
		} else {
			loginNote.setText(R.string.create_new_account);
			createOrLogin.setText(R.string.create);
		}

		createOrLogin.setOnClickListener(this);
		cancel.setOnClickListener(this);
		
		return view;
	}

	public void onClick(View v) {
		if(v == createOrLogin) {
			onClick(CREATE_OR_LOGIN_KEY);
		} else if(v == cancel) {
			onClick(CANCEL_KEY);
		}
	}
	
	private void onClick(int key) {
		switch(key) {
			case CREATE_OR_LOGIN_KEY:
				
				String accountId = this.accountId.getText().toString();
				String token = this.token.getText().toString();
				
				if(accountId == null || accountId.length() <= 0 || token == null || token.length() <= 0) {
					Toast.makeText(getActivity().getApplicationContext(), R.string.account_id_and_token_mandatory, Toast.LENGTH_LONG).show();
					return;
				}
				
				
				if(!isAccountPresent) {

					ICredential credential = new Credential();
					credential.setAccountId(accountId);
					credential.setToken(token);
					credential.setActive(true);
					
					try {
						credential.saveOrUpdate();
					} catch(DatabaseException databaseException) {
						Log.error(getClass().getName(), "onClick", "DatabaseException caught while creating account, " + databaseException.getMessage());
						Toast.makeText(getActivity(), "DatabaseException caught while creating account, " + databaseException.getMessage(), Toast.LENGTH_LONG).show();
						return;
					}
				} 

				boolean authenticated = false;
				
				try {
					Credential[] credentials = (Credential[]) new Credential().select().where(Credential.ACCOUNT_ID).equalTo(accountId).execute();
					authenticated = credentials[0].getToken().equals(token);					
				} catch(DatabaseException databaseException) {
					Log.error(getClass().getName(), "onClick", "DatabaseException caught while authenticating account, " + databaseException.getMessage());
					Toast.makeText(getActivity(), "DatabaseException caught while authenticating account, " + databaseException.getMessage(), Toast.LENGTH_LONG).show();
					return;
				}
				
				if(authenticated) {
					Intent intent = new Intent(getActivity(), siminov.connect.template.activities.Home.class);
					getActivity().startActivity(intent);
				}
				
				break;
			case CANCEL_KEY:
				getActivity().finish();
				break;
		}
	}
}
