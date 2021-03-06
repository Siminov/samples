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

package siminov.connect.sample.activities;

import java.io.InputStream;

import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.core.log.Log;
import siminov.core.utils.Utils;
import android.app.Activity;
import android.os.Bundle;
import android.widget.TextView;

public class HomeSourceCode extends Activity {

	private TextView sourceCode = null;
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		setContentView(R.layout.home_source_code);
		
		sourceCode = (TextView) findViewById(R.id.source_code);
		initialize();
	}

	public void onResume() {
		super.onResume();
		
		StateManager.getInstance().putState(StateManager.ACTIVE_ACTIVITY, this);
	}
	
	
	private void initialize() {
		InputStream sourceCodeStream = null;
		sourceCodeStream = getClass().getClassLoader().getResourceAsStream(getString(R.string.source_code_package_name) + getString(R.string.home_source_code_file_name));

		try {
			sourceCode.setText(Utils.toString(sourceCodeStream));
		} catch(Exception exception) {
			Log.error(getClass().getName(), "initialize", "Exception caught while getting input stream of home source code, " + exception.getMessage());
		}
	}
	 
}
