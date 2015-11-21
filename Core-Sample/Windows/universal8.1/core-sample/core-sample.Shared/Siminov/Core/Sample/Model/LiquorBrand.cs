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
    public class LiquorBrand : Core.Database.Database
    {

        //Table Name
        public static readonly String TABLE_NAME = "LIQUOR_BRAND";

        //Column Names
        public static readonly String LIQUOR_TYPE = "LIQUOR_TYPE";
        public static readonly String BRAND_NAME = "BRAND_NAME";
        public static readonly String DESCRIPTION = "DESCRIPTION";
        public static readonly String LINK = "LINK";
        public static readonly String COUNTRY = "COUNTRY";

        //Brands

        /*
         * Gin Brands
         */
        public static readonly String GIN_BRAND_THE_BOTANIST = "The Botanist";
        public static readonly String GIN_BRAND_TANQUERAY = "Tanqueray";


        /*
         * Rum Brands
         */
        public static readonly String RUM_BRAND_BACARDI = "Bacardi";
        public static readonly String RUM_BRAND_OLD_MONK = "Old Monk";


        /*
         * Tequila Brands
         */
        public static readonly String TEQUILA_BRAND_PATRON = "Patron";
        public static readonly String TEQUILA_BRAND_SAUZA = "Sauza";


        /*
         * Vodka Brands
         */
        public static readonly String VODKA_BRAND_SMIRNOFF = "Smirnoff";
        public static readonly String VODKA_BRAND_ABSOLUT = "";


        //Whiskey - Bourbons Brands
        public static readonly String WHISKEY_BRAND_JOHNNIE_WALKER = "Johnnie Walker";
        public static readonly String WHISKEY_BRAND_JACK_DANIELS = "Jack Daniels";


        //Beer Brands
        public static readonly String BEER_BRAND_KINGFISHER = "Kingfisher";
        public static readonly String BEER_BRAND_HEINEKEN = "Heineken";


        //Wine Brands 
        public static readonly String WINE_BRAND_YELLOW_TAIL = "Yellow Tail";
        public static readonly String WINE_BRAND_GALLO = "Gallo";


        //Variables
        private Liquor liquor = null;
        private String brandName = null;
        private String description = null;
        private String link = null;
        private String country = null;

        //Methods 

        public Liquor GetLiquor()
        {
            return this.liquor;
        }

        public void SetLiquor(Liquor liquor)
        {
            this.liquor = liquor;
        }

        public String GetBrandName()
        {
            return this.brandName;
        }

        public void SetBrandName(String brandName)
        {
            this.brandName = brandName;
        }

        public String GetDescription()
        {
            return this.description;
        }

        public void SetDescription(String description)
        {
            this.description = description;
        }

        public String GetLink()
        {
            return this.link;
        }

        public void SetLink(String link)
        {
            this.link = link;
        }

        public String GetCountry()
        {
            return this.country;
        }

        public void SetCountry(String country)
        {
            this.country = country;
        }
    }
}
