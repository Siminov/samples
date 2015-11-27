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



using Siminov.Connect.Sample.Model;
using Siminov.Connect.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample.Writter
{
	public class LiquorWritter
	{
		public byte[] Build(Liquor liquor)
		{

			String liquorType = liquor.GetLiquorType();
			String description = liquor.GetDescription();
			String history = liquor.GetHistory();
			String link = liquor.GetLink();
			String alcholContent = liquor.GetAlcholContent();

			IEnumerator<LiquorBrand> liquorBrands = liquor.GetLiquorBrands();


			StringBuilder data = new StringBuilder();
			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR + ">");

			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR_NAME + ">" + liquorType + "</" + Constants.ADD_LIQUOR_WS_LIQUOR_NAME + ">");
			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR_DESCRIPTION + ">" + description + "</" + Constants.ADD_LIQUOR_WS_LIQUOR_DESCRIPTION + ">");
			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR_HISTORY + ">" + history + "</" + Constants.ADD_LIQUOR_WS_LIQUOR_HISTORY + ">");
			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR_LINK + ">" + link + "</" + Constants.ADD_LIQUOR_WS_LIQUOR_LINK + ">");
			data.Append("<" + Constants.ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT + ">" + alcholContent + "</" + Constants.ADD_LIQUOR_WS_LIQUOR_ALCHOL_CONTENT + ">");

			data.Append("<" + Constants.ADD_LIQUOR_WS_BRANDS + ">");

			while (liquorBrands.MoveNext())
			{

				LiquorBrand liquorBrand = liquorBrands.Current;

				String brandName = liquorBrand.GetBrandName();
				String brandDescription = liquorBrand.GetDescription();
				String brandLink = liquorBrand.GetLink();
				String country = liquorBrand.GetCountry();

				data.Append("<" + Constants.ADD_LIQUOR_WS_BRAND + "/>");
				data.Append("<" + Constants.ADD_LIQUOR_WS_BRAND_NAME + "/>" + brandName + "<" + Constants.ADD_LIQUOR_WS_BRAND_NAME + "/>");
				data.Append("<" + Constants.ADD_LIQUOR_WS_BRAND_DESCRIPTION + "/>" + brandDescription + "<" + Constants.ADD_LIQUOR_WS_BRAND_DESCRIPTION + "/>");
				data.Append("<" + Constants.ADD_LIQUOR_WS_BRAND_LINK + "/>" + brandLink + "<" + Constants.ADD_LIQUOR_WS_BRAND_LINK + "/>");
				data.Append("<" + Constants.ADD_LIQUOR_WS_BRAND_COUNTRY + "/>" + country + "<" + Constants.ADD_LIQUOR_WS_BRAND_COUNTRY + "/>");
				data.Append("</" + Constants.ADD_LIQUOR_WS_BRAND + "/>");
			}

			data.Append("</" + Constants.ADD_LIQUOR_WS_BRANDS + "/>");
			data.Append("</" + Constants.ADD_LIQUOR_WS_LIQUOR + ">");

			String str = data.ToString();
			byte[] bytes = new byte[str.Length * sizeof(char)];
			System.Buffer.BlockCopy(str.ToCharArray(), 0, bytes, 0, bytes.Length);

			return bytes;
		}

	}
}
