/**
 * [SIMINOV FRAMEWORK]
 * Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
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

package siminov.connect.sample.reader;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;

import siminov.connect.sample.Constants;
import siminov.connect.sample.model.Book;
import siminov.core.exception.DeploymentException;
import siminov.core.log.Log;
import siminov.core.reader.SiminovSAXDefaultHandler;

public class BooksReader extends SiminovSAXDefaultHandler implements Constants {

    private Collection<Book> books = new ArrayList<Book>();
    private Book book = null;


    private StringBuilder tempValue = new StringBuilder();


    public BooksReader(InputStream data) {

        if(data == null) {
            return;
        }


        try {
            parseMessage(data);
        } catch(Exception exception) {
            Log.error(getClass().getName(), "Constructor", "Exception caught while parsing Books, " + exception.getMessage());
            throw new DeploymentException(getClass().getName(), "Constructor", "Exception caught while parsing Books, " + exception.getMessage());
        }
    }

    public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
        super.startElement(uri, localName, qName, attributes);

        tempValue = new StringBuilder();

        if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK)) {
            book = new Book();
        }
    }

    public void characters(char[] ch, int start, int length) throws SAXException {
        super.characters(ch, start, length);

        String value = new String(ch,start,length);

        if(value == null || value.length() <= 0 || value.equalsIgnoreCase(NEW_LINE)) {
            return;
        }

        value = value.trim();
        tempValue.append(value);
    }

    public void endElement(String uri, String localName, String qName) throws SAXException {
        super.endElement(uri, localName, qName);

        if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK)) {
            books.add(book);
        } else if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK_TITLE)) {
            book.setTitle(tempValue.toString());
        } else if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK_DESCRIPTION)) {
            book.setDescription(tempValue.toString());
        } else if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK_AUTHOR)) {
            book.setAuthor(tempValue.toString());
        } else if(localName.equalsIgnoreCase(GET_BOOKS_WS_BOOK_LINK)) {
            book.setLink(tempValue.toString());
        }
    }

    public Iterator<Book> getBooks() {
        return this.books.iterator();
    }
}
