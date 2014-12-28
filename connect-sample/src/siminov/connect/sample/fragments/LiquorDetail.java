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

import java.util.Collection;
import java.util.LinkedList;

import siminov.connect.sample.Constants;
import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.controllers.LiquorDetailController;
import siminov.connect.sample.model.Gadget;
import siminov.connect.sample.model.Liquor;
import siminov.connect.sample.model.LiquorBrand;
import siminov.connect.sample.services.GetLiquorBrands;
import siminov.connect.sync.SyncHandler;
import siminov.connect.sync.SyncRequest;
import siminov.connect.sync.design.ISyncRequest;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.ListFragment;

public class LiquorDetail extends ListFragment {

	private LoadData loadData = null;
	private LiquorDetailController liquorDetailController = new LiquorDetailController();
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		refresh();
		getBrands();
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

		private Liquor liquor = null;
		private LiquorBrand[] liquorBrands = null;
		
		protected Void doInBackground(Void... params) {
			liquor = ((siminov.connect.sample.activities.LiquorDetail) getActivity()).getLiquor();
			liquorBrands = liquorDetailController.getLiquorBrands(liquor.getLiquorType());

			return null;
		}
		
		public void onPostExecute(Void params) {
			if(getListView() == null) {
				return;
			}

			Collection<Object> objects = new LinkedList<Object>();
			objects.add(liquor);

			Gadget liquorBrandsLabel = new Gadget();
			liquorBrandsLabel.setStatusType(Gadget.LIQUOR_BRANDS_LABEL);
			
			objects.add(liquorBrandsLabel);
			
			if(liquorBrands != null && liquorBrands.length > 0) {
				for(int i = 0;i < liquorBrands.length;i++) {
					objects.add(liquorBrands[i]);
				}
			}
			
			setListAdapter(new siminov.connect.sample.adapters.LiquorDetail(getListView().getContext(), objects.toArray()));
		}
	}

	
	private void getBrands() {

		Liquor liquor = ((siminov.connect.sample.activities.LiquorDetail) getActivity()).getLiquor();

		ISyncRequest syncRequest = new SyncRequest();
		syncRequest.setName(Constants.SYNC_LIQUOR_BRANDS);
		syncRequest.addResource(GetLiquorBrands.LIQUOR_NAME, liquor.getLiquorType());
		syncRequest.addResource(GetLiquorBrands.LIQUOR, liquor);
		syncRequest.addResource(GetLiquorBrands.UI_COMPONENT, this);
		
		SyncHandler syncHandler = SyncHandler.getInstance();
		syncHandler.handle(syncRequest);
	}
}
