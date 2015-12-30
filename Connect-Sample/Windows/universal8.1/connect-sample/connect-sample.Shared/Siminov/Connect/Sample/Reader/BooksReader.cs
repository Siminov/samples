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
    public class BooksReader : SiminovSAXDefaultHandler
    {
        private ICollection<Book> books = new List<Book>();
        private Book book = null;


        private StringBuilder tempValue = new StringBuilder();


        public BooksReader(Stream data)
        {

            if (data == null)
            {
                return;
            }


            try
            {
                ParseMessage(data);
            }
            catch (System.Exception exception)
            {
                Log.Error(this.GetType().Name, "Constructor", "Exception caught while parsing books, " + exception.Message);
                throw new DeploymentException(this.GetType().Name, "Constructor", "Exception caught while parsing books, " + exception.Message);
            }
        }

        public override void StartElement(XmlReader reader, IDictionary<String, String> attributes)
        {
            String localName = reader.Name;
            tempValue = new StringBuilder();

            if (localName.Equals(Connect.Sample.Constants.GET_BOOKS_WS_BOOK, StringComparison.OrdinalIgnoreCase))
            {
                book = new Book();
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

            if (localName.Equals(Constants.GET_BOOKS_WS_BOOK, StringComparison.OrdinalIgnoreCase))
            {
                books.Add(book);
            }
            else if (localName.Equals(Constants.GET_BOOKS_WS_BOOK_TITLE, StringComparison.OrdinalIgnoreCase))
            {
                book.SetTitle(tempValue.ToString());
            }
            else if (localName.Equals(Constants.GET_BOOKS_WS_BOOK_DESCRIPTION, StringComparison.OrdinalIgnoreCase))
            {
                book.SetDescription(tempValue.ToString());
            }
            else if (localName.Equals(Constants.GET_BOOKS_WS_BOOK_AUTHOR, StringComparison.OrdinalIgnoreCase))
            {
                book.SetAuthor(tempValue.ToString());
            }
            else if (localName.Equals(Constants.GET_BOOKS_WS_BOOK_LINK, StringComparison.OrdinalIgnoreCase))
            {
                book.SetLink(tempValue.ToString());
            }
        }

        public IEnumerator<Book> GetBooks()
        {
            return this.books.GetEnumerator();
        }

    }
}
