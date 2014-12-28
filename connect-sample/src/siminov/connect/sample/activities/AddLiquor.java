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
import siminov.connect.sample.model.Liquor;
import siminov.connect.sample.model.LiquorBrand;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.EditText;

public class AddLiquor extends FragmentActivity {

	private EditText brand = null;
	private EditText description = null;
	private EditText history = null;
	private EditText link = null;
	private EditText alcholContent = null;

	
	private Liquor liquor = new Liquor();
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.add_liquor);
		
		brand = (EditText) findViewById(R.id.add_liquor_brand);
		description = (EditText) findViewById(R.id.add_liquor_description);
		history = (EditText) findViewById(R.id.add_liquor_history);
		link = (EditText) findViewById(R.id.add_liquor_link);
		alcholContent = (EditText) findViewById(R.id.add_liquor_alchol_content);
		
		brand.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquor.setLiquorType(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});

		description.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquor.setDescription(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
		
		history.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquor.setHistory(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
		
		link.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquor.setLink(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
		
		alcholContent.addTextChangedListener(new TextWatcher() {
			
			public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { liquor.setAlcholContent(arg0.toString()); }
			public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
			public void afterTextChanged(Editable arg0) { }
		});
	}

	public void onResume() {
		super.onResume();
		
		StateManager.getInstance().putState(StateManager.ACTIVE_ACTIVITY, this);
	}
	

	public void addLiquorBrand(LiquorBrand liquorBrand) {
		liquorBrand.setLiquor(liquor);
		liquor.addLiquorBrand(liquorBrand);
	}
	
	
	public boolean onCreateOptionsMenu(Menu menu) {
	    MenuInflater inflater = getMenuInflater();
	    inflater.inflate(R.menu.add_liquor_menu, menu);
	    return true;
	}

	
	public boolean onOptionsItemSelected(MenuItem item) {
		
	    switch (item.getItemId()) {
	        case R.id.save_liquor:
	        	
	        	/*
	        	 * Save Liquor
	        	 */
	        	try {
		        	liquor.save();
	        	} catch(Exception e) {
	        		
	        	}

	        	
	        	/*
	        	 * Submit Liquor
	        	 */
	        	siminov.connect.sample.services.AddLiquor addLiquor = new siminov.connect.sample.services.AddLiquor();
	        	addLiquor.addResource(siminov.connect.sample.services.AddLiquor.LIQUOR, liquor.getLiquorType());
	        	addLiquor.invoke();

	        	siminov.connect.sample.fragments.Home home = (siminov.connect.sample.fragments.Home) StateManager.getInstance().getState(StateManager.ACTIVE_FRAGMENT);
	        	home.refresh();
	        	
	        	finish();
	        	
	        	return true;
	        case R.id.add_liquor_brand:
	        	
	        	Intent intent = new Intent(this, AddLiquorBrand.class);
	        	startActivity(intent);
	        	
	            return true;
	        default:
	            return super.onOptionsItemSelected(item);
	    }
	}
}
