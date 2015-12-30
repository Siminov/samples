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

package siminov.hybrid.phonegap.sample;

import org.apache.cordova.DroidGap;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;
import siminov.core.IInitializer;

public class Siminov extends DroidGap {

	public void onCreate(Bundle savedInstanceState) { 

		super.onCreate(savedInstanceState);
		super.init();
		super.appView.getSettings().setJavaScriptEnabled(true);

		initializeSiminov();

		WebView.setWebContentsDebuggingEnabled(true);
		
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