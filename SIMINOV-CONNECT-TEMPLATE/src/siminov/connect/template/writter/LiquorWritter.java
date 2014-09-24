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

package siminov.connect.template.writter;

import java.util.Iterator;

import siminov.connect.template.Constants;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.model.LiquorBrand;

public class LiquorWritter implements Constants {

	public byte[] build(Liquor liquor) {
		
		String liquorType = liquor.getLiquorType();
		String description = liquor.getDescription();
		String history = liquor.getHistory();
		String link = liquor.getLink();
		String alcholContent = liquor.getAlcholContent();
		
		Iterator<LiquorBrand> liquorBrands = liquor.getLiquorBrands();
		
		
		StringBuilder data = new StringBuilder();
			data.append("<" + ADD_LIQUOR_WS_LIQUOR + ">");
			
				data.append("<" + ADD_LIQUOR_WS_LIQUOR_NAME + ">" + liquorType + "</" + ADD_LIQUOR_WS_LIQUOR_NAME + ">");
				data.append("<" + ADD_LIQUOR_WS_LIQUOR_DESCRIPTION + ">" + description + "</" + ADD_LIQUOR_WS_LIQUOR_DESCRIPTION + ">");
				data.append("<" + ADD_LIQUOR_WS_LIQUOR_HISTORY + ">" + history + "</" + ADD_LIQUOR_WS_LIQUOR_HISTORY + ">");
				data.append("<" + ADD_LIQUOR_WS_LIQUOR_LINK + ">" + link + "</" + ADD_LIQUOR_WS_LIQUOR_LINK + ">");
				data.append("<" + ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT + ">" + alcholContent + "</" + ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT + ">");

					data.append("<" + ADD_LIQUOR_WS_BRANDS + ">");
						
					while(liquorBrands.hasNext()) {
						
						LiquorBrand liquorBrand = liquorBrands.next();
						
						String brandName = liquorBrand.getBrandName();
						String brandDescription = liquorBrand.getDescription();
						String brandLink = liquorBrand.getLink();
						String country = liquorBrand.getCountry();

						data.append("<" + ADD_LIQUOR_WS_BRAND + "/>");
							data.append("<" + ADD_LIQUOR_WS_BRAND_NAME + "/>" + brandName + "<" + ADD_LIQUOR_WS_BRAND_NAME + "/>");
							data.append("<" + ADD_LIQUOR_WS_BRAND_DESCRIPTION + "/>" + brandDescription + "<" + ADD_LIQUOR_WS_BRAND_DESCRIPTION + "/>");
							data.append("<" + ADD_LIQUOR_WS_BRAND_LINK + "/>" + brandLink + "<" + ADD_LIQUOR_WS_BRAND_LINK + "/>");
							data.append("<" + ADD_LIQUOR_WS_BRAND_COUNTRY + "/>" + country + "<" + ADD_LIQUOR_WS_BRAND_COUNTRY + "/>");
						data.append("</" + ADD_LIQUOR_WS_BRAND + "/>");
					}
				
					data.append("</" + ADD_LIQUOR_WS_BRANDS + "/>");
			data.append("</" + ADD_LIQUOR_WS_LIQUOR + ">");
			
		return data.toString().getBytes();	
	}
}
