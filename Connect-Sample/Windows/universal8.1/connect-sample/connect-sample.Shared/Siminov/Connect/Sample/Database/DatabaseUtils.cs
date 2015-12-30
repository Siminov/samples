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


using Siminov.Core.Exception;
using Siminov.Core.Log;
using Siminov.Core.Model;
using Siminov.Connect.Sample.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Siminov.Connect.Sample.Database
{
    public class DatabaseUtils
    {


        public void PrepareData()
        {
            CreateBooks();
        }

        private void CreateBooks()
        {

            //Make C Book Object
            Book c = new Book();
            c.SetTitle(Book.BOOK_TYPE_C);
            c.SetDescription("C Description");
            c.SetAuthor("C Author");
            c.SetLink("C Link");


            //Make C++ Book Object
            Book cplus = new Book();
            cplus.SetTitle(Book.BOOK_TYPE_C_PLUS);
            cplus.SetDescription("C++ Description");
            cplus.SetAuthor("C++ Author");
            cplus.SetLink("C++ Link");


            //Make C# Book Object
            Book csharp = new Book();
            csharp.SetTitle(Book.BOOK_TYPE_C_SHARP);
            csharp.SetDescription("C# Description");
            csharp.SetAuthor("C# Author");
            csharp.SetLink("C# Link");


            //Make Java Object
            Book java = new Book();
            java.SetTitle(Book.BOOK_TYPE_JAVA);
            java.SetDescription("Java Description");
            java.SetAuthor("Java Author");
            java.SetLink("Java Link");


            //Make JavaScript Object
            Book javascript = new Book();
            javascript.SetTitle(Book.BOOK_TYPE_JAVASCRIPT);
            javascript.SetDescription("JavaScript Description");
            javascript.SetAuthor("JavaScript Author");
            javascript.SetLink("JavaScript Link");


            //Make Objective C Object
            Book objectivec = new Book();
            objectivec.SetTitle(Book.BOOK_TYPE_OBJECTIVEC);
            objectivec.SetDescription("Objective C Description");
            objectivec.SetAuthor("Objective C Author");
            objectivec.SetLink("Objective C Link");


            //Make Swift Object
            Book swift = new Book();
            swift.SetTitle(Book.BOOK_TYPE_SWIFT);
            swift.SetDescription("Swift Description");
            swift.SetAuthor("Swift Author");
            swift.SetLink("Swift Link");


            DatabaseDescriptor databaseDescriptor = swift.GetDatabaseDescriptor();

            try
            {
                Core.Database.Database.BeginTransaction(databaseDescriptor);

                c.SaveOrUpdate();
                cplus.SaveOrUpdate();
                csharp.SaveOrUpdate();
                java.SaveOrUpdate();
                javascript.SaveOrUpdate();
                objectivec.SaveOrUpdate();
                swift.SaveOrUpdate();

                CreateCLessions(c);
                CreateCPlusLessions(cplus);
                CreateCSharpLessions(csharp);
                CreateJavaLessions(java);
                CreateJavaScriptLessions(javascript);
                CreateObjectiveCLessions(objectivec);
                CreateSwiftLessions(swift);

                Core.Database.Database.CommitTransaction(databaseDescriptor);
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(typeof(DatabaseUtils).Name, "createBooks", "DatabaseException caught while creating books, " + databaseException.GetMessage());
            }

        }

        private void CreateCLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.C_FIRST_LESSION);
            firstLession.SetDescription("C First Lession Description");
            firstLession.SetLink("C First Lession Link");

            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.C_SECOND_LESSION);
            secondLession.SetDescription("C Second Lession Description");
            secondLession.SetLink("C Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(typeof(DatabaseUtils).Name, "createCLessions", "DatabaseException caught while creating c lessions, " + databaseException.GetMessage());
            }
        }

        private void CreateCPlusLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.C_PLUS_FIRST_LESSION);
            firstLession.SetDescription("C Plus First Description");
            firstLession.SetLink("C Plus First Link");

            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.C_PLUS_SECOND_LESSION);
            secondLession.SetDescription("C Plus Second Description");
            secondLession.SetLink("C Plus Second Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createCPlusLessions", "DatabaseException caught while creating c plus lessions, " + databaseException.GetMessage());
            }
        }

        private void CreateCSharpLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.C_SHARP_FIRST_LESSION);
            firstLession.SetDescription("C Sharp First Lession Description");
            firstLession.SetLink("C Sharp First Lession Link");

            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.C_SHARP_SECOND_LESSION);
            secondLession.SetDescription("C Sharp Second Lession Description");
            secondLession.SetLink("C Sharp Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createCSharpLessions", "DatabaseException caught while creating c sharp lessions, " + databaseException.GetMessage());
            }
        }


        private void CreateJavaLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.JAVA_FIRST_LESSION);
            firstLession.SetDescription("Java First Lession Description");
            firstLession.SetLink("Java First Lession Link");

            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.JAVA_SECOND_LESSION);
            secondLession.SetDescription("Java Second Lession Description");
            secondLession.SetLink("Java Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createJavaLessions", "DatabaseException caught while creating java lessions, " + databaseException.GetMessage());
            }
        }


        private void CreateJavaScriptLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.JAVASCRIPT_FIRST_LESSION);
            firstLession.SetDescription("JavaScript First Lession Description");
            firstLession.SetLink("JavaScript First Lession Link");

            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.JAVASCRIPT_SECOND_LESSION);
            secondLession.SetDescription("JavaScript Second Lession Description");
            secondLession.SetLink("JavaScript Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createJavaScriptLessions", "DatabaseException caught while creating javascript lessions, " + databaseException.GetMessage());
            }
        }



        private void CreateObjectiveCLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.OBJECTIVEC_FIRST_LESSION);
            firstLession.SetDescription("Objective C First Lession Description");
            firstLession.SetLink("Objective C First Lession Link");


            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.OBJECTIVEC_SECOND_LESSION);
            secondLession.SetDescription("Objective C Second Lession Description");
            secondLession.SetLink("Objective C Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createObjectiveCLessions", "DatabaseException caught while creating objective c lessions, " + databaseException.GetMessage());
            }
        }


        private void CreateSwiftLessions(Book book)
        {

            Lession firstLession = new Lession();
            firstLession.SetBook(book);
            firstLession.SetName(Lession.SWIFT_FIRST_LESSION);
            firstLession.SetDescription("Swift First Lession Description");
            firstLession.SetLink("Swift First Lession Link");


            Lession secondLession = new Lession();
            secondLession.SetBook(book);
            secondLession.SetName(Lession.SWIFT_SECOND_LESSION);
            secondLession.SetDescription("Swift Second Lession Description");
            secondLession.SetLink("Swift Second Lession Link");

            try
            {
                firstLession.SaveOrUpdate();
                secondLession.SaveOrUpdate();
            }
            catch (DatabaseException databaseException)
            {
                Log.Error(this.GetType().Name, "createSwiftLessions", "DatabaseException caught while creating swift lessions, " + databaseException.GetMessage());
            }
        }
    }
}
