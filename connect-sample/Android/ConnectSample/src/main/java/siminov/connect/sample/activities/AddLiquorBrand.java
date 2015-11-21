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

package siminov.connect.sample.activities;

import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.model.LiquorBrand;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.EditText;

public class AddLiquorBrand extends FragmentActivity {

	private EditText name = null;
	private EditText country = null;
	private EditText description = null;
	private EditText link = null;

	private AddLiquor addLiquorActivity = null;
	
	
	private LiquorBrand liquorBrand = new LiquorBrand();
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.add_liquor_brand);
		
		addLiquorActivity = (AddLiquor) StateManager.getInstance().getState(StateManager.ACTIVE_ACTIVITY);
		
		name = (EditText) findViewById(R.id.add_liquor_brand_name);
		country = (EditText) findViewById(R.id.add_liquor_brand_country);
		description = (EditText) findViewById(R.id.add_liquor_brand_description);
		link = (EditText) findViewById(R.id.add_liquor_brand_link);
		
		name.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquorBrand.setBrandName(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});

		country.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquorBrand.setCountry(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
		
		description.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquorBrand.setDescription(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
		
		link.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquorBrand.setLink(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
	}


	public void onResume() {
		super.onResume();
		
		StateManager.getInstance().putState(StateManager.ACTIVE_ACTIVITY, this);
	}
	
	public boolean onCreateOptionsMenu(Menu menu) {
	    MenuInflater inflater = getMenuInflater();
	    inflater.inflate(R.menu.add_liquor_brand_menu, menu);
	    return true;
	}

	
	public boolean onOptionsItemSelected(MenuItem item) {
		
	    switch (item.getItemId()) {
	        case R.id.save_liquor_brand:

	        	addLiquorActivity.addLiquorBrand(liquorBrand);
	        	
	        	finish();
	        	
	        	return true;
	        default:
	            return super.onOptionsItemSelected(item);
	    }
	}
}
