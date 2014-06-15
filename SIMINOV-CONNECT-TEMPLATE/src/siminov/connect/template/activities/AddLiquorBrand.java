package siminov.connect.template.activities;

import siminov.connect.template.R;
import siminov.connect.template.StateManager;
import siminov.connect.template.model.LiquorBrand;
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