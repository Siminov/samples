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

package siminov.connect.sample.controllers;

import siminov.connect.sample.model.Lession;
import siminov.core.exception.DatabaseException;
import siminov.core.log.Log;

public class BookDetailController {

    public Lession[] getLessions(String bookTitle) {

        try {
            return (Lession[]) new Lession().select().where(Lession.BOOK_TITLE).equalTo(bookTitle).execute();
        } catch(DatabaseException databaseException) {
            Log.error(getClass().getName(), "getLessions", "DatabaseException caught while getting lessions, " + databaseException.getMessage());
            return null;
        }
    }

}
