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

package siminov.connect.sample.services;

import siminov.connect.connection.design.IConnectionRequest;
import siminov.connect.connection.design.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.writter.BookWritter;
import siminov.connect.service.Service;
import siminov.core.exception.DatabaseException;
import siminov.core.log.Log;

public class AddBook extends Service {

    private final String SERVICE_NAME = "SIMINOV-CONNECT-BOOKS-SERVICE";
    private final String REQUEST_NAME = "ADD-BOOK";

    public static final String BOOK = "BOOK";

    public AddBook() {
        setService(SERVICE_NAME);
        setRequest(REQUEST_NAME);
    }

    public void onStart() {

    }

    public void onQueue() {

    }

    public void onPause() {

    }

    public void onResume() {

    }

    public void onFinish() {

    }

    public void onRequestInvoke(IConnectionRequest connectionRequest) {

        if(connectionRequest.getDataStream() == null) {
            return;
        }


        String bookTitle = (String) getResource(BOOK);
        Book book = null;

        try {
            Book[] books = new Book().select().where(Book.TITLE).equalTo(bookTitle).execute();
            if(books != null && books.length > 0) {
                book = books[0];
            }
        } catch(DatabaseException de) {
            Log.error(AddBook.class.getName(), "onServiceApiInvoke", "Database Exception caught while getting book from database, " + de.getMessage());
            return;
        }


        BookWritter bookWritter = new BookWritter();
        byte[] dataStream = bookWritter.build(book);

        connectionRequest.setDataStream(dataStream);
    }

    public void onRequestFinish(IConnectionResponse connectionResponse) {

    }

    public void onTerminate(ServiceException serviceException) {

    }
}
