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
    var Log = require('siminov/Log/Log');
    var Function = require('siminov/Function/Function');
    var Service = require('siminov/Service/Service');
    var Callback = require('siminov/Callback');
    var Database = require('siminov/Database/Database');
    var ResourceManager = require('siminov/Resource/ResourceManager');

    var Book = require('../Models/Book');
    var Lession = require('../Models/Lession');
    var LessionsReader = require('../ReaderWritter/LessionsReader');
    var BookConstants = require('../Constants');

    var BookDetail = require('../../BookDetail');

    module.exports = GetLessions;
}



function GetLessions() {

    Service.apply(this, arguments);

    this.setService(GetLessions.SERVICE_NAME);
    this.setRequest(GetLessions.REQUEST_NAME);

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

    }

    this.onRequestFinish = function(connectionResponse) {
        console.log("on request finish");
        if(connectionResponse.getResponse() == null) {
            return;
        }

        var bookTitle = this.getResource(GetLessions.BOOK_TITLE);
        var book = this.getResource(GetLessions.BOOK);
        var home = this.getResource("HOME");

        console.log("book: " + book);

        /*var book;
        for(var i = 0;i < books.length;i++) {

            if(books[i].getTitle() === bookTitle) {
                book = books[i];
            }
        }*/

        book.removeLessions();


        var lessionsReader = new LessionsReader();
        lessionsReader.parse(connectionResponse.getResponse());

        var lessions = lessionsReader.getLessions();
        var callbackCount = 0;

        var callback = new Callback();
        callback.onExecute = function(transaction) {

            for(var i = 0;i < lessions.length;i++) {
                var lession = lessions[i];
                lession.setBook(book);

                lession.saveOrUpdateAsync(saveCallback, transaction);

                var saveCallback = new Callback();
                saveCallback.onSuccess = function() {

                }
            }


            book.updateAsync(updateCallback, transaction);

            var updateCallback = new Callback();
            updateCallback.onSuccess = function() {

            }


            var selectCallback = new Callback();
            selectCallback.onSuccess = function(savedBooks) {
                Log.debug("Home", "populateHome", "Saved Books: " + savedBooks);
            }

            var columnNames = new Array();
            columnNames.push('TITLE');
            columnNames.push('DESCRIPTION');

            new Lession().select().columns(columnNames).ascendingOrderBy(columnNames).groupBy(columnNames).executeAsync(selectCallback, transaction);


            var countCallback = new Callback();
            countCallback.onSuccess = function(lessionCount) {
                Log.debug("Home", "populateHome", "Lession Count: " + lessionCount);
            }


            new Lession().count().executeAsync(countCallback, transaction);


            var avgCallback = new Callback();
            avgCallback.onSuccess = function(lessionAvg) {
                Log.debug("Home", "populateHome", "Lession Avg: " + lessionAvg);
            }


            new Lession().avg().column('TITLE').executeAsync(avgCallback, transaction);


            var minCallback = new Callback();
            minCallback.onSuccess = function(lessionMin) {
                Log.debug("Home", "populateHome", "Lession Min: " + lessionMin);
            }


            new Lession().min().column('TITLE').executeAsync(minCallback, transaction);

            var maxCallback = new Callback();
            maxCallback.onSuccess = function(lessionMax) {
                Log.debug("Home", "populateHome", "Lession Max: " + lessionMax);
            }


            new Lession().max().column('TITLE').executeAsync(maxCallback, transaction);


            var sumCallback = new Callback();
            sumCallback.onSuccess = function(lessionSum) {
                Log.debug("Home", "populateHome", "Lession Sum: " + lessionSum);
            }


            new Lession().sum().column('TITLE').executeAsync(sumCallback, transaction);


            var totalCallback = new Callback();
            totalCallback.onSuccess = function(lessionTotal) {
                Log.debug("Home", "populateHome", "Lession Total: " + lessionTotal);
            }


            new Lession().total().column('TITLE').executeAsync(totalCallback, transaction);


            var groupConcatCallback = new Callback();
            groupConcatCallback.onSuccess = function(lessionGroupConcat) {
                Log.debug("Home", "populateHome", "Lession Group Concat: " + lessionGroupConcat);
            }


            new Lession().groupConcat().column('TITLE').executeAsync(groupConcatCallback, transaction);


            var deleteCallback = new Callback();
            deleteCallback.onSuccess = function(lessionDelete) {
                Log.debug("Home", "populateHome", "Lession Delete: " + lessionDelete);
            }


            //new Lession().delete().executeAsync(deleteCallback, transaction);


            var getTableNameCallback = new Callback();
            getTableNameCallback.onSuccess = function(lessionGetTableName) {
                Log.debug("Home", "populateHome", "Lession Get Table Name: " + lessionGetTableName);
            }


            new Lession().getTableNameAsync(getTableNameCallback, transaction);


            var getColumnNamesCallback = new Callback();
            getColumnNamesCallback.onSuccess = function(lessionGetColumnNames) {
                Log.debug("Home", "populateHome", "Lession Get Column Names: " + lessionGetColumnNames);
            }


            new Lession().getColumnNamesAsync(getColumnNamesCallback, transaction);


            var getColumnTypesCallback = new Callback();
            getColumnTypesCallback.onSuccess = function(lessionGetColumnTypes) {
                Log.debug("Home", "populateHome", "Lession Get Column Types: " + lessionGetColumnTypes);
            }


            new Lession().getColumnTypesAsync(getColumnTypesCallback, transaction);


            var getPrimaryKeysCallback = new Callback();
            getPrimaryKeysCallback.onSuccess = function(lessionGetPrimaryKeys) {
                Log.debug("Home", "populateHome", "Lession Get Primary Keys: " + lessionGetPrimaryKeys);
            }


            new Lession().getPrimaryKeysAsync(getPrimaryKeysCallback, transaction);


            var getMandatoryFieldsCallback = new Callback();
            getMandatoryFieldsCallback.onSuccess = function(lessionGetMandatoryFields) {
                Log.debug("Home", "populateHome", "Lession Get Mandatory Fields: " + lessionGetMandatoryFields);
            }


            new Lession().getMandatoryFieldsAsync(getMandatoryFieldsCallback, transaction);


            var getUniqueFieldsCallback = new Callback();
            getUniqueFieldsCallback.onSuccess = function(lessionGetUniqueFields) {
                Log.debug("Home", "populateHome", "Lession Get Unique Fields: " + lessionGetUniqueFields);
            }


            new Lession().getUniqueFieldsAsync(getUniqueFieldsCallback, transaction);


            var getForeignKeysCallback = new Callback();
            getForeignKeysCallback.onSuccess = function(lessionGetForeignKeys) {
                Log.debug("Home", "populateHome", "Lession Get Foreign Keys: " + lessionGetForeignKeys);
            }


            new Lession().getForeignKeysAsync(getForeignKeysCallback, transaction);


            var getApplicationDescriptor = new Callback();
            getApplicationDescriptor.onSuccess = function(applicationDescriptor) {
                Log.debug("Home", "populateHome", "Application Descriptor: " + applicationDescriptor);
            }


            ResourceManager.getInstance().getApplicationDescriptorAsync(getApplicationDescriptor, transaction);
        }

        callback.onSuccess = function() {

            if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
                ++callbackCount;

                if((callbackCount + 1) == lessions.length) {
                    Log.debug("GetLessions", "onRequestFinish", "Save Or Update Success: Populate Detail: " + callbackCount);

                    fetchLessions();
                }
            } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
                fetchLessions();
            }
        }

        callback.onFailure = function() {
            alert("Trasaction Failure");
        }



        if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
            console.log("lessions: " + lessions.length);
            for(var i = 0;i < lessions.length;i++) {
                var lession = lessions[i];
                lession.setBook(book);

                lession.saveOrUpdateAsync(callback);
            }
        } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {

            var databaseDescriptorCallback = new Callback();
            databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
                Database.beginTransactionAsync(databaseDescriptor, callback);
            }

            new Lession().getDatabaseDescriptorAsync(databaseDescriptorCallback);
        } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {

            for(var i = 0;i < lessions.length;i++) {
                var lession = lessions[i];
                lession.setBook(lession);

                try {
                    lession.saveOrUpdate();
                } catch(de) {
                    Log.error("GetBooks", "onServiceRequestFinish", "Database Exception caught while saving lessions in database, " + de.getMessage());
                    alert("error while saving lessions");
                }
            }

            fetchLessions();
        }


        function fetchLessions() {
		console.log("populate detail");

            for(var i = 0;i < lessions.length;i++) {
                book.addLession(lessions[i]);
            }


            if(dom != undefined) {
                populateDetail(book.getTitle());
            } else {

                home.props.navigator.push({
                    title: book.getTitle(),
                    component: BookDetail,
                    passProps: book
                });
            }
        }
    }

    this.onTerminate = function(serviceException) {

    }
}

GetLessions.SERVICE_NAME = "SIMINOV-HYBRID-LESSIONS-SERVICE";
GetLessions.REQUEST_NAME = "GET-LESSIONS";

GetLessions.BOOK_TITLE = "BOOK_TITLE";
GetLessions.BOOK = "BOOK";


Function.extend(Service, GetLessions);
