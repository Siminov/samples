package siminov.hybrid.phonegap.template;

import org.apache.cordova.DroidGap;

import siminov.orm.IInitializer;
import android.app.Activity;
import android.os.Bundle;

public class Siminov extends DroidGap {

	public void onCreate(Bundle savedInstanceState) { 

		super.onCreate(savedInstanceState);
		super.init();
		super.appView.getSettings().setJavaScriptEnabled(true);

		initializeSiminov();

		super.loadUrl("file:///android_asset/www/home.html");
	}


	private void initializeSiminov() {

		IInitializer initializer = siminov.hybrid.Siminov.initializer();
		
		initializer.addParameter(getApplicationContext());
		initializer.addParameter(super.appView);
		initializer.addParameter((Activity) this);
		
		initializer.initialize();
		
	}

	public void onDestroy() {
		super.onDestroy();
		
		System.exit(RESULT_OK);
	}
	
}