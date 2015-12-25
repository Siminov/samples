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

package siminov.connect.sample.writter;

import java.util.Iterator;

import siminov.connect.sample.Constants;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.model.Lession;

public class BookWritter implements Constants {

    public byte[] build(Book book) {

        String bookTitle = book.getTitle();
        String description = book.getDescription();
        String author = book.getAuthor();
        String link = book.getLink();

        Iterator<Lession> lessions = book.getLessions();


        StringBuilder data = new StringBuilder();
        data.append("<" + ADD_BOOK_WS_BOOK + ">");

        data.append("<" + ADD_BOOK_WS_BOOK_TITLE + ">" + bookTitle + "</" + ADD_BOOK_WS_BOOK_TITLE + ">");
        data.append("<" + ADD_BOOK_WS_BOOK_DESCRIPTION + ">" + description + "</" + ADD_BOOK_WS_BOOK_DESCRIPTION + ">");
        data.append("<" + ADD_BOOK_WS_BOOK_AUTHOR + ">" + author + "</" + ADD_BOOK_WS_BOOK_AUTHOR + ">");
        data.append("<" + ADD_BOOK_WS_BOOK_LINK + ">" + link + "</" + ADD_BOOK_WS_BOOK_LINK + ">");

        data.append("<" + ADD_BOOK_WS_LESSIONS + ">");

        while(lessions.hasNext()) {

            Lession lession = lessions.next();

            String brandName = lession.getName();
            String brandDescription = lession.getDescription();
            String brandLink = lession.getLink();

            data.append("<" + ADD_BOOK_WS_LESSION + "/>");
            data.append("<" + ADD_BOOK_WS_LESSION_NAME + "/>" + brandName + "<" + ADD_BOOK_WS_LESSION_NAME + "/>");
            data.append("<" + ADD_BOOK_WS_LESSION_DESCRIPTION + "/>" + brandDescription + "<" + ADD_BOOK_WS_LESSION_DESCRIPTION + "/>");
            data.append("<" + ADD_BOOK_WS_LESSION_LINK + "/>" + brandLink + "<" + ADD_BOOK_WS_LESSION_LINK + "/>");
            data.append("</" + ADD_BOOK_WS_LESSION + "/>");
        }

        data.append("</" + ADD_BOOK_WS_LESSIONS + "/>");
        data.append("</" + ADD_BOOK_WS_LESSION + ">");

        return data.toString().getBytes();
    }
}
