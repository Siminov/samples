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
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class MenuSlider extends ArrayAdapter<String> {

	public MenuSlider(Context context, String[] menus) {
		super(context, R.layout.blank_layout, menus);
	}
	
	public View getView (int position, View convertView, ViewGroup parent) {
		LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		View view = null;

		String menuValue = getItem(position);
		if(menuValue == null || menuValue.length() <= 0) {
			view = inflater.inflate(R.layout.blank_layout, null);
			return view;
		}
	
		view = inflater.inflate(R.layout.menu_slider_artist, null);
		
		ImageView menuIcon = (ImageView) view.findViewById(R.id.menu_icon);
		TextView menu = (TextView) view.findViewById(R.id.menu);
		
		if(getContext() instanceof siminov.connect.template.activities.Home) {
			if(menuValue.equalsIgnoreCase(siminov.connect.template.fragments.MenuSlider.HOME_ABOUT_SIMINOV_FRAMEWORK)) {
				menuIcon.setImageResource(R.drawable.siminov);
			}
		} else {
			view = inflater.inflate(R.layout.blank_layout, null);
		}

		menu.setText(menuValue);
		return view;
	}
}
