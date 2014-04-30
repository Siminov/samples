package siminov.connect.template.activities;

import siminov.connect.template.R;
import siminov.connect.template.StateManager;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.model.LiquorBrand;
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
	        	siminov.connect.template.services.AddLiquor addLiquor = new siminov.connect.template.services.AddLiquor();
	        	addLiquor.addResource(siminov.connect.template.services.AddLiquor.LIQUOR, liquor.getLiquorType());
	        	addLiquor.invoke();

	        	siminov.connect.template.fragments.Home home = (siminov.connect.template.fragments.Home) StateManager.getInstance().getState(StateManager.ACTIVE_FRAGMENT);
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
