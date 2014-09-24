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


package siminov.orm.template.activities;

import siminov.orm.template.R;
import siminov.orm.template.model.Liquor;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

public class LiquorDetail extends FragmentActivity {

	public static final String INTENT_LIQUOR = "INTENT_LIQUOR";

	private Liquor liquor = null;
	
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		
		liquor = (Liquor) getIntent().getExtras().getSerializable(INTENT_LIQUOR);
		
		setContentView(R.layout.liquor_detail);
	}

	public Liquor getLiquor() {
		return this.liquor;
	}
}
