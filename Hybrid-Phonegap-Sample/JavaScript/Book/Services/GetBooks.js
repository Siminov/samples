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
    var BooksList = require('../../BooksList');

    var Log = require('../../Siminov/Log/Log');
    var Function = require('../../Siminov/Function/Function');
    var Service = require('../../Siminov/Service/Service');
    var Callback = require('../../Siminov/Callback');
    var Database = require('../../Siminov/Database/Database');

    var Book = require('../Models/Book');
    var Credential = require('../Models/Credential');
    var Lession = require('../Models/Lession');
    var BooksReader = require('../ReaderWritter/BooksReader');
    var BookConstants = require('../Constants');

    module.exports = GetBooks;
}


function GetBooks() {

    Service.apply(this, arguments);

    this.setService(GetBooks.SERVICE_NAME);
    this.setRequest(GetBooks.REQUEST_NAME);

    this.onStart = function() {
        //alert("onServiceStart");
    }

    this.onQueue = function() {
        //alert("onServiceQueue");
    }

    this.onPause = function() {
        //alert("onServicePause");
    }

    this.onResume = function() {
        //alert("onServiceResume");
    }

    this.onFinish = function() {
        //alert("onServiceFinish");
    }

    this.onRequestInvoke = function(connectionRequest) {
        //alert("onServiceRequestInvoke");m
    }

    this.onRequestFinish = function(connectionResponse) {

        //alert("onServiceRequestFinish");

        var home = this.getResource("HOME");

        var booksReader = new BooksReader();
        booksReader.parse(connectionResponse.getResponse());

        var books = booksReader.getBooks();
        if(books != undefined && books != null && books.length > 0) {

            var callbackCount = 0;

            var callback = new Callback();
            callback.onExecute = function(transaction) {

                for(var i = 0;i < books.length;i++) {
                    var book = books[i];

                    var saveCallback = new Callback();
                    saveCallback.onSuccess =  function() {
                        //alert("book saved");
                    }

                    book.saveOrUpdateAsync(saveCallback, transaction);
                    break;
                }
            }

            callback.onSuccess = function() {

                if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
                    ++callbackCount;

                    if((callbackCount + 1) == books.length) {
                        Log.debug("GetBooks", "onRequestFinish", "Save Or Update Success: Populate Home: " + callbackCount);
                        loadBooks();
                    }
                } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
                    loadBooks();
                }
            }

            callback.onFailure = function() {
                //alert("Transaction Failure");
            }


            if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
                for(var i = 0;i < books.length;i++) {
                    var book = books[i];
                    book.saveOrUpdateAsync(callback);
                }
            } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {

                var databaseDescriptorCallback = new Callback();
                databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
                    Database.beginTransactionAsync(databaseDescriptor, callback);
                }

                new Book().getDatabaseDescriptorAsync(databaseDescriptorCallback);
            } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {

                for(var i = 0;i < books.length;i++) {
                    var book = books[i];
                    book.saveOrUpdate();
                    break;
                }

                loadBooks();
            }

            function loadBooks() {

                if(dom != undefined) {
                    populateHome();
                } else {

			if(home) {
				home.props.navigator.push({
                        		title: "Books List",
                        		component: BooksList,
                    		});
			} else if (OS_IOS) {
				bookList.open();
			} else if (OS_ANDROID) {
				bookList.open();
			}
                }
            }
        }
    }

    this.onTerminate = function(serviceException) {
        //alert("onServiceTerminate");
    }
}



GetBooks.SERVICE_NAME = "SIMINOV-HYBRID-BOOKS-SERVICE";
GetBooks.REQUEST_NAME = "GET-BOOKS";


Function.extend(Service, GetBooks);
