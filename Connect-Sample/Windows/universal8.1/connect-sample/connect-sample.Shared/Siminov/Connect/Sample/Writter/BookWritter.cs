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
    public class BookWritter
    {
        public byte[] Build(Book book)
        {

            String title = book.GetTitle();
            String description = book.GetDescription();
            String history = book.GetAuthor();
            String link = book.GetLink();

            IEnumerator<Lession> lessions = book.GetLessions();


            StringBuilder data = new StringBuilder();
            data.Append("<" + Constants.ADD_BOOK_WS_BOOK + ">");

            data.Append("<" + Constants.ADD_BOOK_WS_BOOK_TITLE + ">" + title + "</" + Constants.ADD_BOOK_WS_BOOK_TITLE + ">");
            data.Append("<" + Constants.ADD_BOOK_WS_BOOK_DESCRIPTION + ">" + description + "</" + Constants.ADD_BOOK_WS_BOOK_DESCRIPTION + ">");
            data.Append("<" + Constants.ADD_BOOK_WS_BOOK_AUTHOR + ">" + history + "</" + Constants.ADD_BOOK_WS_BOOK_AUTHOR + ">");
            data.Append("<" + Constants.ADD_BOOK_WS_BOOK_LINK + ">" + link + "</" + Constants.ADD_BOOK_WS_BOOK_LINK + ">");

            data.Append("<" + Constants.ADD_BOOK_WS_BOOK + ">");

            while (lessions.MoveNext())
            {

                Lession lession = lessions.Current;

                String brandName = lession.GetName();
                String brandDescription = lession.GetDescription();
                String brandLink = lession.GetLink();

                data.Append("<" + Constants.ADD_BOOK_WS_LESSION + "/>");
                data.Append("<" + Constants.ADD_BOOK_WS_LESSION_NAME + "/>" + brandName + "<" + Constants.ADD_BOOK_WS_LESSION_NAME + "/>");
                data.Append("<" + Constants.ADD_BOOK_WS_LESSION_DESCRIPTION + "/>" + brandDescription + "<" + Constants.ADD_BOOK_WS_LESSION_DESCRIPTION + "/>");
                data.Append("<" + Constants.ADD_BOOK_WS_LESSION_LINK + "/>" + brandLink + "<" + Constants.ADD_BOOK_WS_LESSION_LINK + "/>");
                data.Append("</" + Constants.ADD_BOOK_WS_LESSION + "/>");
            }

            data.Append("</" + Constants.ADD_BOOK_WS_LESSIONS + "/>");
            data.Append("</" + Constants.ADD_BOOK_WS_BOOK + ">");

            String str = data.ToString();
            byte[] bytes = new byte[str.Length * sizeof(char)];
            System.Buffer.BlockCopy(str.ToCharArray(), 0, bytes, 0, bytes.Length);

            return bytes;
        }

    }
}
