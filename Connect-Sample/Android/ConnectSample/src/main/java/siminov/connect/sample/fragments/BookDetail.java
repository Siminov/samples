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

package siminov.connect.sample.fragments;

import java.util.Collection;
import java.util.LinkedList;

import siminov.connect.sample.Constants;
import siminov.connect.sample.R;
import siminov.connect.sample.StateManager;
import siminov.connect.sample.controllers.BookDetailController;
import siminov.connect.sample.model.Gadget;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.model.Lession;
import siminov.connect.sample.services.GetLessions;
import siminov.connect.sync.SyncHandler;
import siminov.connect.sync.SyncRequest;
import siminov.connect.sync.design.ISyncRequest;
import android.graphics.Color;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v4.app.ListFragment;

public class BookDetail extends ListFragment {

    private LoadData loadData = null;
    private BookDetailController bookDetailController = new BookDetailController();

    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        refresh();
        getBrands();
    }

    public void onResume() {
        super.onResume();

        getListView().setDivider(null);
        getListView().setDividerHeight(0);
        getListView().setSelector(R.drawable.list_selector_artist);
        getListView().setCacheColorHint(Color.TRANSPARENT);

        StateManager.getInstance().putState(StateManager.ACTIVE_FRAGMENT, this);
    }

    public void refresh() {

        loadData = new LoadData();
        loadData.execute();
    }

    private class LoadData extends AsyncTask<Void, Void, Void> {

        private Book book = null;
        private Lession[] lessions = null;

        protected Void doInBackground(Void... params) {
            book = ((siminov.connect.sample.activities.BookDetail) getActivity()).getBook();
            lessions = bookDetailController.getLessions(book.getTitle());

            return null;
        }

        public void onPostExecute(Void params) {
            if(getListView() == null) {
                return;
            }

            Collection<Object> objects = new LinkedList<Object>();
            objects.add(book);

            Gadget lessionsLabel = new Gadget();
            lessionsLabel.setStatusType(Gadget.LESSIONS_LABEL);

            objects.add(lessionsLabel);

            if(lessions != null && lessions.length > 0) {
                for(int i = 0;i < lessions.length;i++) {
                    objects.add(lessions[i]);
                }
            }

            setListAdapter(new siminov.connect.sample.adapters.BookDetail(getListView().getContext(), objects.toArray()));
        }
    }


    private void getBrands() {

        Book book = ((siminov.connect.sample.activities.BookDetail) getActivity()).getBook();

        ISyncRequest syncRequest = new SyncRequest();
        syncRequest.setName(Constants.SYNC_LESSIONS);
        syncRequest.addResource(GetLessions.BOOK_TITLE, book.getTitle());
        syncRequest.addResource(GetLessions.BOOK, book);
        syncRequest.addResource(GetLessions.UI_COMPONENT, this);

        SyncHandler syncHandler = SyncHandler.getInstance();
        syncHandler.handle(syncRequest);
    }
}
