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

package siminov.connect.template.adapters;

import siminov.connect.template.R;
import siminov.connect.template.model.Gadget;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.model.LiquorBrand;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class LiquorDetail extends ArrayAdapter<Object> {

	public LiquorDetail(Context context, Object[] objects) {
		super(context, R.layout.blank_layout, objects);
	}
	
	public View getView (int position, View convertView, ViewGroup parent) {
		LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		View view = null;

		Object object = getItem(position);
		if(object == null) {
			view = inflater.inflate(R.layout.blank_layout, null);
			return view;
		}
		
		if(object instanceof Liquor) {
			Liquor liquor = (Liquor) object;
			
			view = inflater.inflate(R.layout.liquor_detail_artist, null);
			
			TextView description = (TextView) view.findViewById(R.id.liquor_description);
			TextView history = (TextView) view.findViewById(R.id.liquor_history);
			TextView alcholContent = (TextView) view.findViewById(R.id.liquor_alchol_content);
			TextView link = (TextView) view.findViewById(R.id.liquor_link);
			
			description.setText(liquor.getDescription());
			history.setText(liquor.getHistory());
			alcholContent.setText(liquor.getAlcholContent());
			link.setText(liquor.getLink());
			
		} else if(object instanceof LiquorBrand) {
			LiquorBrand liquorBrand = (LiquorBrand) object;
			
			view = inflater.inflate(R.layout.liquor_brand_gadget, null);

			TextView liquorBrandName = (TextView) view.findViewById(R.id.liquor_brand_name);
			
			liquorBrandName.setText(liquorBrand.getBrandName());
		} else if(object instanceof Gadget) {
			view = inflater.inflate(R.layout.liquor_brands_label, null);
		}
		
		return view;
	}
}
