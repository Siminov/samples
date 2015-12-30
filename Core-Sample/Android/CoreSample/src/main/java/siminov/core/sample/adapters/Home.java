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

package siminov.core.sample.adapters;

import siminov.core.sample.R;
import siminov.core.sample.model.Book;
import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.View.OnClickListener;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.TextView;

public class Home extends ArrayAdapter<Book> implements OnClickListener {

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
		
		TextView bookTitle = (TextView) view.findViewById(R.id.title);
		LinearLayout bookDetails = (LinearLayout) view.findViewById(R.id.book_details);
		
		bookTitle.setText(book.getTitle());
		bookDetails.setId(position);
		
		bookDetails.setOnClickListener(this);

		return view;
	}
	
	public void onClick(View v) {

		Intent intent = new Intent(getContext(), siminov.core.sample.activities.BookDetail.class);
		intent.putExtra(siminov.core.sample.activities.BookDetail.INTENT_BOOK, (Book) getItem(v.getId()));
		intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		
		getContext().startActivity(intent);
	}
}
