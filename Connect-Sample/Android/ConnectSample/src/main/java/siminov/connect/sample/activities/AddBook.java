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

package siminov.connect.sample.activities;

import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.model.Lession;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.EditText;

public class AddBook extends FragmentActivity {

    private EditText lession = null;
    private EditText description = null;
    private EditText author = null;
    private EditText link = null;
    private EditText alcholContent = null;


    private Book book = new Book();

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.add_book);

        lession = (EditText) findViewById(R.id.add_lession);
        description = (EditText) findViewById(R.id.add_book_description);
        author = (EditText) findViewById(R.id.add_book_author);
        link = (EditText) findViewById(R.id.add_book_link);

        lession.addTextChangedListener(new TextWatcher() {

            public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { book.setTitle(arg0.toString()); }
            public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
            public void afterTextChanged(Editable arg0) { }
        });

        description.addTextChangedListener(new TextWatcher() {

            public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { book.setDescription(arg0.toString()); }
            public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
            public void afterTextChanged(Editable arg0) { }
        });

        author.addTextChangedListener(new TextWatcher() {

            public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { book.setAuthor(arg0.toString()); }
            public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
            public void afterTextChanged(Editable arg0) { }
        });

        link.addTextChangedListener(new TextWatcher() {

            public void onTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { book.setLink(arg0.toString()); }
            public void beforeTextChanged(CharSequence arg0, int arg1, int arg2, int arg3) { }
            public void afterTextChanged(Editable arg0) { }
        });

    }

    public void onResume() {
        super.onResume();

        StateManager.getInstance().putState(StateManager.ACTIVE_ACTIVITY, this);
    }


    public void addLession(Lession lession) {
        lession.setBook(book);
        book.addLession(lession);
    }


    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.add_book_menu, menu);
        return true;
    }


    public boolean onOptionsItemSelected(MenuItem item) {

        switch (item.getItemId()) {
            case R.id.save_book:
	        	
	        	/*
	        	 * Save Book
	        	 */
                try {
                    book.save();
                } catch(Exception e) {

                }

	        	
	        	/*
	        	 * Submit Book
	        	 */
                siminov.connect.sample.services.AddBook addBook = new siminov.connect.sample.services.AddBook();
                addBook.addResource(siminov.connect.sample.services.AddBook.BOOK, book.getTitle());
                addBook.invoke();

                siminov.connect.sample.fragments.Home home = (siminov.connect.sample.fragments.Home) StateManager.getInstance().getState(StateManager.ACTIVE_FRAGMENT);
                home.refresh();

                finish();

                return true;
            case R.id.add_lession:

                Intent intent = new Intent(this, AddLession.class);
                startActivity(intent);

                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }
}
