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



using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Siminov.Core.Database;
using Siminov.Core.Sample.Model;


namespace Siminov.Core.Sample.Model
{
	public class Liquor : Core.Database.Database
	{

		//Table Name
		public static readonly String TABLE_NAME = "LIQUOR";

		//Column Names
		public static readonly String LIQUOR_TYPE = "LIQUOR_TYPE";
		public static readonly String DESCRIPTION = "DESCRIPTION";
		public static readonly String HISTORY = "HISTORY";
		public static readonly String LINK = "LINK";
		public static readonly String ALCHOL_CONTENT = "ALCHOL_CONTENT";

		//Liquor Types 
		public static readonly String LIQUOR_TYPE_GIN = "Gin";
		public static readonly String LIQUOR_TYPE_RUM = "Rum";
		public static readonly String LIQUOR_TYPE_TEQUILA = "Tequila";
		public static readonly String LIQUOR_TYPE_VODKA = "Vodka";
		public static readonly String LIQUOR_TYPE_WHISKEY = "Whiskey";
		public static readonly String LIQUOR_TYPE_BEER = "Beer";
		public static readonly String LIQUOR_TYPE_WINE = "Wine";


		//Variables
		private String liquorType = null;
		private String description = null;
		private String history = null;
		private String link = null;
		private String alcholContent = null;
		private ICollection<LiquorBrand> liquorBrands = new List<LiquorBrand>();

		//Methods

		public String GetLiquorType()
		{
			return this.liquorType;
		}

		public void SetLiquorType(String liquorType)
		{
			this.liquorType = liquorType;
		}

		public String GetDescription()
		{
			return this.description;
		}

		public void SetDescription(String description)
		{
			this.description = description;
		}

		public String GetHistory()
		{
			return this.history;
		}

		public void SetHistory(String history)
		{
			this.history = history;
		}

		public String GetLink()
		{
			return this.link;
		}

		public void SetLink(String link)
		{
			this.link = link;
		}

		public String GetAlcholContent()
		{
			return this.alcholContent;
		}

		public void SetAlcholContent(String alcholContent)
		{
			this.alcholContent = alcholContent;
		}

		public IEnumerator<LiquorBrand> GetLiquorBrands()
		{
			return this.liquorBrands.GetEnumerator();
		}

		public void SetLiquorBrands(IEnumerator<LiquorBrand> liquorBrands)
		{

			while (liquorBrands.MoveNext())
			{
				this.liquorBrands.Add(liquorBrands.Current);
			}
		}
	}
}
