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



var win;
var dom;

try {

    if(!window) {
    	window = global || window;
    }

	win = window;
	dom = window['document'];
} catch(e) {
	win = Ti.App.Properties;
}

if(dom == undefined) {
    var Log = require('../../Siminov/Log/Log');
    var Function = require('../../Siminov/Function/Function');
    var Service = require('../../Siminov/Service/Service');

    var Book = require('../Models/Book');
    var Constants = require('../Constants');
    var BooksWritter = require('../ReaderWritter/BooksReader');

    module.exports = AddBook;
}


function AddBook() {

    Service.apply(this, arguments);

	this.setService(AddBook.SERVICE_NAME);
	this.setRequest(AddBook.REQUEST_NAME);

	this.onStart = function() {

	}

	this.onQueue = function() {

	}

	this.onPause = function() {

	}

	this.onResume = function() {

	}

	this.onFinish = function() {

	}

	this.onRequestInvoke = function(connectionRequest) {

		if(connectionRequest.getDataStream() == null) {
			return;
		}


		var bookTitle = getResource(AddBook.BOOK);
		var book = null;

		try {
			var books = new Book().select().where(Book.TITLE).equalTo(bookTitle).execute();
			if(books != null && books.length > 0) {
				book = books[0];
			}
		} catch(de) {
			Log.error("AddBook", "onServiceRequestInvoke", "Database Exception caught while getting book from database, " + de.getMessage());
			return;
		}


		var bookWritter = new BookWritter();
		var dataStream = bookWritter.build(book);

		connectionRequest.setDataStream(dataStream);
	}

	this.onRequestFinish = function(connectionResponse) {

	}

	this.onTerminate = function(serviceException) {

	}
}



AddBook.SERVICE_NAME = "SIMINOV-HYBRID-BOOKS-SERVICE";
AddBook.REQUEST_NAME = "ADD-BOOK";

AddBook.BOOK = "BOOK";


Function.extend(Service, AddBook);
