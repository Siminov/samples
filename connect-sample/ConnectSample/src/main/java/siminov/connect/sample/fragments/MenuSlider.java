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

package siminov.connect.sample.fragments;

import siminov.connect.sample.activities.About;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.graphics.drawable.GradientDrawable.Orientation;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.ListFragment;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;

public class MenuSlider extends ListFragment implements OnItemClickListener {

	private final int HOME_ABOUT_SIMINOV_FRAMEWORK_KEY = 1;
	private final int DO_OAUTH_AUTHENTICATION_KEY = 0;
	
	public static final String HOME_ABOUT_SIMINOV_FRAMEWORK = "About Siminov Framework";
	public static final String DO_OAUTH_AUTHENTICATION = "Ouath Authentication";

	private String[] HOME_MENUS = { DO_OAUTH_AUTHENTICATION, HOME_ABOUT_SIMINOV_FRAMEWORK };
	
	private LoadMenu loadMenu = null;
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	
		loadMenu = new LoadMenu();
		loadMenu.execute();
	}

	public void onResume() {
		super.onResume();

		int[] colors = {0, Color.LTGRAY, 0};
		getListView().setDivider(new GradientDrawable(Orientation.RIGHT_LEFT, colors)); 
		getListView().setDividerHeight(1);
		getListView().setCacheColorHint(Color.TRANSPARENT);

		getListView().setOnItemClickListener(this);
	}

	
	private class LoadMenu extends AsyncTask<Void, Void, Void> {

		protected Void doInBackground(Void... arg0) {
			return null;
		}
	
		protected void onPostExecute(Void params) {
			
			Activity activity = getActivity();
			if(activity instanceof siminov.connect.sample.activities.Home) {
				setListAdapter(new siminov.connect.sample.adapters.MenuSlider(activity, HOME_MENUS));
			}
		}
	}


	private void onClick(int key) {
		
		Activity activity = getActivity();
		if(activity instanceof siminov.connect.sample.activities.Home) {
			switch(key) {
			case DO_OAUTH_AUTHENTICATION_KEY:
				
				/*Credential credential = new Credential();
				credential.setAccountId("siminov");
				credential.setActive(true);
				
				AuthorizationFactory authorizationFactory = AuthorizationFactory.getInstance();
				IAuthorization authorization = authorizationFactory.getAuthorization();
			
				try {
					authorization.doAuthentication(credential);
				} catch(AuthorizationException ae) {
					Log.error(MenuSlider.class.getName(), "onClick", "AuthorizationException caught while authenticating the user, " + ae.getMessage());
				}*/

			case HOME_ABOUT_SIMINOV_FRAMEWORK_KEY:
					Intent intent = new Intent(activity, About.class);
					startActivity(intent);
					break;
				default:
					break;
			}
		}
	}
	
	public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {
		Activity activity = getActivity();
		if(activity instanceof siminov.connect.sample.activities.Home) {
			onClick(arg2);
		}
	}
}
