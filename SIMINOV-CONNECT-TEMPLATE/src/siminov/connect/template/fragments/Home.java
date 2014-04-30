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

import siminov.connect.design.sync.ISyncRequest;
import siminov.connect.sync.SyncHandler;
import siminov.connect.sync.SyncRequest;
import siminov.connect.template.Constants;
import siminov.connect.template.R;
import siminov.connect.template.StateManager;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.services.GetLiquors;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.ListFragment;

public class Home extends ListFragment {

	private LoadData loadData = null;

	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
	}

	public void onResume() {
		super.onResume();

		getListView().setDivider(null);
		getListView().setDividerHeight(0);
		getListView().setSelector(R.drawable.list_selector_artist);
		getListView().setCacheColorHint(Color.TRANSPARENT);
		
		StateManager.getInstance().putState(StateManager.ACTIVE_FRAGMENT, this);
		
		refresh();
        getLiquors();

        registerForContextMenu(getListView());        
	}

	
	
	
	public void refresh() {
		loadData = new LoadData();
		loadData.execute();
	}

	private class LoadData extends AsyncTask<Void, Void, Void> {

		Liquor[] liquors = null;

		protected Void doInBackground(Void... params) {
			liquors = new siminov.connect.template.controllers.Home().getLiquors();
			return null;
		}

		public void onPostExecute(Void params) {
			if (getActivity() == null) {
				setListAdapter(null);
				return;
			}

			setListAdapter(new siminov.connect.template.adapters.Home(getActivity().getApplicationContext(), liquors));
		}
	}
	
	
	private void getLiquors() {
		
		ISyncRequest syncRequest = new SyncRequest();
		syncRequest.setName(Constants.SYNC_LIQUORS);
		syncRequest.addResource(GetLiquors.UI_COMPONENT, this);
	
		
		SyncHandler syncHandler = SyncHandler.getInstance();
		syncHandler.handle(syncRequest);
	}
}
