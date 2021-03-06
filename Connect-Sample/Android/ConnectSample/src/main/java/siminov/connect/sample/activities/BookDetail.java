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


package siminov.connect.sample.activities;

import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.model.Book;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;

public class BookDetail extends FragmentActivity {

    public static final String INTENT_BOOK = "INTENT_BOOK";

    private Book book = null;

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        book = (Book) getIntent().getExtras().getSerializable(INTENT_BOOK);

        setContentView(R.layout.book_detail);
    }

    public void onResume() {
        super.onResume();

        StateManager.getInstance().putState(StateManager.ACTIVE_ACTIVITY, this);
    }

    public Book getBook() {
        return this.book;
    }
}
