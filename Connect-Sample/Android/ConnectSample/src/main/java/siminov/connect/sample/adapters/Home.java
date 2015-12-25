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

package siminov.connect.sample.adapters;

import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.model.Book;
import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.View.OnLongClickListener;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

public class Home extends ArrayAdapter<Book> implements OnClickListener, OnLongClickListener {

	public Home(Context context, Book[] books) {
		super(context, R.layout.blank_layout, books);
	}
	
	public View getView (int position, View convertView, ViewGroup parent) {
		LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
		View view = null;

		Book book = getItem(position);
		if(book == null) {
			view = inflater.inflate(R.layout.blank_layout, null);
		}

		view = inflater.inflate(R.layout.books_list_artist, null);
		
		TextView bookTitle = (TextView) view.findViewById(R.id.book_title);
		LinearLayout bookDetails = (LinearLayout) view.findViewById(R.id.book_details);
		
		bookTitle.setText(book.getTitle());
		bookDetails.setId(position);

		view.setId(position);
		view.setTag(book);
		
		bookDetails.setOnClickListener(this);

		view.setOnLongClickListener(this);
		return view;
	}
	
	public void onClick(View v) {

		Intent intent = new Intent(getContext(), siminov.connect.sample.activities.BookDetail.class);
		intent.putExtra(siminov.connect.sample.activities.BookDetail.INTENT_BOOK, (Book) getItem(v.getId()));
		intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		
		getContext().startActivity(intent);
	}

	public boolean onLongClick(View view) {
		
		((siminov.connect.sample.activities.Home) StateManager.getInstance().getState(StateManager.ACTIVE_ACTIVITY)).selectedBook = getItem(view.getId());
		((Activity) StateManager.getInstance().getState(StateManager.ACTIVE_ACTIVITY)).openContextMenu(view);
		 
		return true;
	}
}
