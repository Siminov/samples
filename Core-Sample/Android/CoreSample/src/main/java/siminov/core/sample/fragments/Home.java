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


package siminov.core.sample.fragments;

import siminov.core.sample.R;
import siminov.core.sample.StateManager;
import siminov.core.sample.model.Book;
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

		Book[] books = null;

		protected Void doInBackground(Void... params) {
			books = new siminov.core.sample.controllers.Home().getBooks();
			return null;
		}

		public void onPostExecute(Void params) {
			if (getActivity() == null) {
				setListAdapter(null);
				return;
			}

			setListAdapter(new siminov.core.sample.adapters.Home(getActivity().getApplicationContext(), books));
		}
	}

	
}
