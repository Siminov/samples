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
    public class Book : Core.Database.Database
    {

        //Table Name
        public static readonly String TABLE_NAME = "BOOK";

        //Column Names
        public static readonly String TITLE = "TITLE";
        public static readonly String DESCRIPTION = "DESCRIPTION";
        public static readonly String AUTHOR = "AUTHOR";
        public static readonly String LINK = "LINK";

        //Book Types
        public static readonly String BOOK_TYPE_C = "C";
        public static readonly String BOOK_TYPE_C_PLUS = "C++";
        public static readonly String BOOK_TYPE_C_SHARP = "C#";
        public static readonly String BOOK_TYPE_JAVA = "Java";
        public static readonly String BOOK_TYPE_JAVASCRIPT = "JavaScript";
        public static readonly String BOOK_TYPE_OBJECTIVEC = "Objective C";
        public static readonly String BOOK_TYPE_SWIFT = "Swift";


        //Variables
        private String title = null;
        private String description = null;
        private String author = null;
        private String link = null;

        private ICollection<Lession> lessions = new List<Lession>();

        //Methods

        public String GetTitle()
        {
            return this.title;
        }

        public void SetTitle(String title)
        {
            this.title = title;
        }

        public String GetDescription()
        {
            return this.description;
        }

        public void SetDescription(String description)
        {
            this.description = description;
        }

        public String GetAuthor()
        {
            return this.author;
        }

        public void SetAuthor(String author)
        {
            this.author = author;
        }

        public String GetLink()
        {
            return this.link;
        }

        public void SetLink(String link)
        {
            this.link = link;
        }


        public IEnumerator<Lession> GetLessions()
        {
            return this.lessions.GetEnumerator();
        }

        public void SetLessions(IEnumerator<Lession> lessions)
        {

            while (lessions.MoveNext())
            {
                this.lessions.Add(lessions.Current);
            }
        }
    }
}
