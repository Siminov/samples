///
/// [SIMINOV FRAMEWORK]
/// Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.



using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Siminov.Core.Database;
using Siminov.Core.Sample.Model;

namespace Siminov.Core.Sample.Model
{
    public class Lession : Core.Database.Database
    {

        //Table Name
        public static readonly String TABLE_NAME = "LESSION";

        //Column Names
        public static readonly String BOOK_TITLE = "TITLE";
        public static readonly String NAME = "NAME";
        public static readonly String DESCRIPTION = "DESCRIPTION";
        public static readonly String LINK = "LINK";

        //Lessions

        /*
         * C Lessions
         */
        public static readonly String C_FIRST_LESSION = "C First Lession";
        public static readonly String C_SECOND_LESSION = "C Second Lession";


        /*
         * C++ Lessions
         */
        public static readonly String C_PLUS_FIRST_LESSION = "C++ First Lession";
        public static readonly String C_PLUS_SECOND_LESSION = "C++ Second Lession";


        /*
         * C# Lessions
         */
        public static readonly String C_SHARP_FIRST_LESSION = "C# First Lession";
        public static readonly String C_SHARP_SECOND_LESSION = "C# Second Lession";


        /*
         * Java Lessions
         */
        public static readonly String JAVA_FIRST_LESSION = "Java First Lession";
        public static readonly String JAVA_SECOND_LESSION = "Java Second Lession";


        //JavaScript Lessions
        public static readonly String JAVASCRIPT_FIRST_LESSION = "JavaScript First Lession";
        public static readonly String JAVASCRIPT_SECOND_LESSION = "JavaScript Second Lession";


        //Objective C Lessions
        public static readonly String OBJECTIVEC_FIRST_LESSION = "Objective C First Lession";
        public static readonly String OBJECTIVEC_SECOND_LESSION = "Objective C Second Lession";


        //Swift Lessions
        public static readonly String SWIFT_FIRST_LESSION = "Swift First Lession";
        public static readonly String SWIFT_SECOND_LESSION = "Swift Second Lession";


        //Variables
        private Book book = null;
        private String name = null;
        private String description = null;
        private String link = null;

        //Methods 

        public Book GetBook()
        {
            return this.book;
        }

        public void SetBook(Book book)
        {
            this.book = book;
        }

        public String GetName()
        {
            return this.name;
        }

        public void SetName(String name)
        {
            this.name = name;
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

    }
}
