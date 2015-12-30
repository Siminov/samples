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

import java.util.Iterator;

import siminov.connect.connection.design.IConnectionRequest;
import siminov.connect.connection.design.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.sample.fragments.BookDetail;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.model.Lession;
import siminov.connect.sample.reader.LessionsReader;
import siminov.connect.service.Service;
import siminov.core.exception.DatabaseException;
import siminov.core.log.Log;
import android.support.v4.app.Fragment;

public class GetLessions extends Service {

    public static final String SERVICE_NAME = "SIMINOV-CONNECT-LESSIONS-SERVICE";
    public static final String REQUEST_NAME = "GET-LESSIONS";

    public static final String BOOK_TITLE = "BOOK-TITLE";
    public static final String BOOK = "BOOK";
    public static final String UI_COMPONENT = "UI_COMPONENT";

    public GetLessions() {
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

    }

    public void onRequestFinish(IConnectionResponse connectionResponse) {

        if(connectionResponse.getResponse() == null) {
            return;
        }


        Book book = (Book) getResource(BOOK);
        Fragment uiComponent = (Fragment) getResource(UI_COMPONENT);

        LessionsReader lessionsReader = new LessionsReader(connectionResponse.getResponse());
        Iterator<Lession> lessions = lessionsReader.getLessions();

        while(lessions.hasNext()) {
            Lession lession = lessions.next();
            lession.setBook(book);

            try {
                lession.saveOrUpdate();
            } catch(DatabaseException de) {
                Log.error(GetLessions.class.getName(), "onServiceApiFinish", "Database Exception caught while saving lessions in database, " + de.getMessage());
            }
        }

        ((BookDetail) uiComponent).refresh();
    }

    public void onTerminate(ServiceException serviceException) {

    }
}
