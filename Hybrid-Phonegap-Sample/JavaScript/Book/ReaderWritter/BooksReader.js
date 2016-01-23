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
    var ServiceException = require('siminov/Exception/ServiceException');
    var Log = require('siminov/Log/Log');

    var Book = require('../Models/Book');
    var BookConstants = require('../Constants');

    var XMLTools = require('./XMLDoc');

    module.exports = BooksReader;
}


function BooksReader() {

	var books = new Array();

	this.parse = function(data) {

		Log.important("BooksReader", "parse", "DATA: " + data);


		var xmlDoc;
		if(dom != undefined) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(data, "text/xml");
        } else {
            xmlDoc = new XMLTools(data, xmlError);

            function xmlError(e) {
                //there was an error, show the user
                alert(e);
            } //end function xmlError
        }

        var booksElement;
        if(dom != undefined) {
            booksElement = xmlDoc.documentElement.childNodes;
        } else {
            var rootElement = xmlDoc.docNode;
            booksElement = rootElement.getElements("book");
        }

		for(var i = 0;i < booksElement.length;i++) {

            if(dom != undefined) {

                var nodeName = booksElement[i].nodeName;
                if(nodeName == BookConstants.PARSER_ERROR) {
                    throw new ServiceException("BooksReader", "parse", "Error while parsing books.");
                } else if(nodeName === BookConstants.GET_BOOKS_WS_BOOK) {

                    var book = parseBook(booksElement[i]);
                    books.push(book);
                }
            } else {
                var book = parseBook(booksElement[i]);
                books.push(book);
            }
		}
	}


	function parseBook(bookElement) {

		var book = new Book();

		var bookProperties;
        if(dom != undefined) {
            bookProperties = bookElement.childNodes;
        } else {
            bookProperties = bookElement.children;
        }

		for(var i = 0;i < bookProperties.length;i++) {

            if(dom != undefined) {

                if(bookProperties[i].childNodes[0] == undefined || bookProperties[i].childNodes[0] == null) {
                    continue;
                }
            }

            var nodeValue;
            if(dom != undefined) {
                nodeName = bookProperties[i].nodeName;
                nodeValue = bookProperties[i].childNodes[0].nodeValue;
            } else {
                nodeName = bookProperties[i].tagName;
                nodeValue = bookProperties[i].getText();
            }


			if(nodeName === BookConstants.GET_BOOKS_WS_BOOK_TITLE) {
				book.setTitle(nodeValue);
			} else if(nodeName === BookConstants.GET_BOOKS_WS_BOOK_DESCRIPTION) {
				book.setDescription(nodeValue);
			} else if(nodeName === BookConstants.GET_BOOKS_WS_BOOK_AUTHOR) {
				book.setAuthor(nodeValue);
			} else if(nodeName === BookConstants.GET_BOOKS_WS_BOOK_LINK) {
				book.setLink(nodeValue);
			}
		}

		return book;
	}

	this.getBooks = function() {
		return books;
	}
}