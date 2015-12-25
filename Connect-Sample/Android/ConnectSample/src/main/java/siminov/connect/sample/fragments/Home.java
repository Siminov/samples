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

import siminov.connect.sample.Constants;
import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.services.GetBooks;
import siminov.connect.sync.SyncHandler;
import siminov.connect.sync.SyncRequest;
import siminov.connect.sync.design.ISyncRequest;
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
        getBooks();

        registerForContextMenu(getListView());        
	}

	
	
	
	public void refresh() {
		loadData = new LoadData();
		loadData.execute();
	}

	private class LoadData extends AsyncTask<Void, Void, Void> {

		Book[] books = null;

		protected Void doInBackground(Void... params) {
			books = new siminov.connect.sample.controllers.Home().getBooks();
			return null;
		}

		public void onPostExecute(Void params) {
			if (getActivity() == null) {
				setListAdapter(null);
				return;
			}

			setListAdapter(new siminov.connect.sample.adapters.Home(getActivity().getApplicationContext(), books));
		}
	}
	
	
	private void getBooks() {
		
		/*ISyncRequest syncRequest = new SyncRequest();
		syncRequest.setName(Constants.SYNC_BOOKS);
		syncRequest.addResource(GetBooks.UI_COMPONENT, this);
	
		
		SyncHandler syncHandler = SyncHandler.getInstance();
		syncHandler.handle(syncRequest);*/
		
		GetBooks getBooks = new GetBooks();
		getBooks.addResource(GetBooks.UI_COMPONENT, this);
		
		getBooks.invoke();
		
	}
}
