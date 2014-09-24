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


package siminov.orm.template.adapters;

import siminov.orm.template.R;
import siminov.orm.template.model.Liquor;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

public class Home extends ArrayAdapter<Liquor> implements OnClickListener {

	public Home(Context context, Liquor[] liquors) {
		super(context, R.layout.blank_layout, liquors);
	}
	
	public View getView (int position, View convertView, ViewGroup parent) {
		LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		View view = null;

		Liquor liquor = getItem(position);
		if(liquor == null) {
			view = inflater.inflate(R.layout.blank_layout, null);
		}

		view = inflater.inflate(R.layout.liquors_list_artist, null);
		
		TextView liquorType = (TextView) view.findViewById(R.id.liquor_type);
		LinearLayout liquorDetails = (LinearLayout) view.findViewById(R.id.liquor_details);
		
		liquorType.setText(liquor.getLiquorType());
		liquorDetails.setId(position);
		
		liquorDetails.setOnClickListener(this);

		return view;
	}
	
	public void onClick(View v) {

		Intent intent = new Intent(getContext(), siminov.orm.template.activities.LiquorDetail.class);
		intent.putExtra(siminov.orm.template.activities.LiquorDetail.INTENT_LIQUOR, (Liquor) getItem(v.getId()));
		intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		
		getContext().startActivity(intent);
	}
}
