/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution|support@siminov.com]
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

package siminov.orm.template.fragments;

import siminov.orm.template.R;
import siminov.orm.template.StateManager;
import siminov.orm.template.model.Liquor;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.ListFragment;

public class Home extends ListFragment {

	private LoadData loadData = null;

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		loadData = new LoadData();
		loadData.execute();
	}

	public void onResume() {
		super.onResume();

		getListView().setDivider(null);
		getListView().setDividerHeight(0);
		getListView().setSelector(R.drawable.list_selector_artist);
		getListView().setCacheColorHint(Color.TRANSPARENT);
		
		StateManager.getInstance().putState(StateManager.ACTIVE_FRAGMENT, this);
	}

	public void refresh() {
		loadData = new LoadData();
		loadData.execute();
	}

	private class LoadData extends AsyncTask<Void, Void, Void> {

		Liquor[] liquors = null;

		protected Void doInBackground(Void... params) {
			liquors = new siminov.orm.template.controllers.Home().getLiquors();
			return null;
		}

		public void onPostExecute(Void params) {
			if (getActivity() == null) {
				setListAdapter(null);
				return;
			}

			setListAdapter(new siminov.orm.template.adapters.Home(getActivity().getApplicationContext(), liquors));
		}
	}

	
}
