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
import siminov.core.sample.model.Gadget;
import siminov.core.sample.model.Book;
import siminov.core.sample.model.Lession;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

public class BookDetail extends ArrayAdapter<Object> {

    public BookDetail(Context context, Object[] objects) {
        super(context, R.layout.blank_layout, objects);
    }

    public View getView (int position, View convertView, ViewGroup parent) {
        LayoutInflater inflater = (LayoutInflater) getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View view = null;

        Object object = getItem(position);
        if(object == null) {
            view = inflater.inflate(R.layout.blank_layout, null);
            return view;
        }

        if(object instanceof Book) {
            Book book = (Book) object;

            view = inflater.inflate(R.layout.book_detail_artist, null);

            TextView description = (TextView) view.findViewById(R.id.book_description);
            TextView author = (TextView) view.findViewById(R.id.book_author);
            TextView link = (TextView) view.findViewById(R.id.book_link);

            description.setText(book.getDescription());
            author.setText(book.getAuthor());
            link.setText(book.getLink());

        } else if(object instanceof Lession) {
            Lession lession = (Lession) object;

            view = inflater.inflate(R.layout.book_gadget, null);

            TextView lessionName = (TextView) view.findViewById(R.id.lession_name);

            lessionName.setText(lession.getName());
        } else if(object instanceof Gadget) {
            view = inflater.inflate(R.layout.lessions_label, null);
        }

        return view;
    }
}
