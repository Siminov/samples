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
using Siminov.Core.Exception;
using Siminov.Core.Log;
using Siminov.Core.Reader;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Xml;

namespace Siminov.Connect.Sample.Reader
{
	public class LiquorBrandsReader : SiminovSAXDefaultHandler
	{
		private ICollection<LiquorBrand> liquorBrands = new List<LiquorBrand>();
		private LiquorBrand liquorBrand = null;


		private StringBuilder tempValue = new StringBuilder();


		public LiquorBrandsReader(Stream data) 
		{

			if(data == null) 
			{
				return;
			}


			try 
			{
				ParseMessage(data);
			} 
			catch(System.Exception exception) 
			{
				Log.Error(this.GetType().Name, "Constructor", "Exception caught while parsing Liquor Brands, " + exception.Message);
				throw new DeploymentException(this.GetType().Name, "Constructor", "Exception caught while parsing Liquor Brands, " + exception.Message);
			}
		}

		public override void StartElement(XmlReader reader, IDictionary<String, String> attributes)
		{
			String localName = reader.Name;
			tempValue = new StringBuilder();

			if(localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND, StringComparison.OrdinalIgnoreCase)) 
			{
				liquorBrand = new LiquorBrand();
			}
		}

		public override void Characters(String value)
		{
			if (value == null || value.Length <= 0 || value.Equals(Constants.NEW_LINE, StringComparison.OrdinalIgnoreCase))
			{
				return;
			}

			value = value.Trim();
			tempValue.Append(value);
		}

		public override void EndElement(String localName)
		{

			if(localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND, StringComparison.OrdinalIgnoreCase)) 
			{
				liquorBrands.Add(liquorBrand);
			}
			else if (localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND_NAME, StringComparison.OrdinalIgnoreCase))
			{
				liquorBrand.SetBrandName(tempValue.ToString());
			}
			else if (localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND_COUNTRY, StringComparison.OrdinalIgnoreCase))
			{
				liquorBrand.SetCountry(tempValue.ToString());
			}
			else if (localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND_DESCRIPTION, StringComparison.OrdinalIgnoreCase))
			{
				liquorBrand.SetDescription(tempValue.ToString());
			}
			else if (localName.Equals(Constants.GET_LIQUOR_BRANDS_WS_BRAND_LINK, StringComparison.OrdinalIgnoreCase))
			{
				liquorBrand.SetLink(tempValue.ToString());
			}
		}

		public IEnumerator<LiquorBrand> GetLiquorBrands() 
		{
			return this.liquorBrands.GetEnumerator();
		}

	}
}
