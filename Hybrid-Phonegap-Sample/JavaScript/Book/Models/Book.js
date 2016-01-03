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
    var Database = require('../../Siminov/Database/Database');
    var Function = require('../../Siminov/Function/Function');

    module.exports = Book;
}


function Book() {

    Database.apply(this, arguments);

    var title;
    var description;
    var author;
    var link;

	var lessions = new Array();

    this.getTitle = function() {
        return title;
    }

    this.setTitle = function(val) {
        title = val;
    }

    this.getDescription = function() {
        return description;
    }

    this.setDescription = function(val) {
        description = val;
    }

    this.getAuthor = function() {
        return author;
    }

    this.setAuthor = function(val) {
        author = val;
    }

    this.getLink = function() {
        return link;
    }

    this.setLink = function(val) {
        link = val;
    }

	this.getLessions = function() {
		return lessions;
	}

	this.removeLessions = function() {
		lessions = new Array();
	}

	this.addLession = function(lession) {
	    lessions.push(lession);
	}

	this.addLessions = function(lession) {
		lessions.push(lession);
	}
}


//Table Name
Book.TABLE_NAME = "BOOK";


//Column Names
Book.TITLE = "TITLE";
Book.DESCRIPTION = "DESCRIPTION";
Book.AUTHOR = "AUTHOR";
Book.LINK = "LINK";

Book.BOOK_TYPE_C = "C";
Book.BOOK_TYPE_C_PLUS = "C++";
Book.BOOK_TYPE_C_SHARP = "C#";
Book.BOOK_TYPE_JAVA = "Java";
Book.BOOK_TYPE_JAVASCRIPT = "JavaScript";
Book.BOOK_TYPE_OBJECTIVEC = "Objective C";
Book.BOOK_TYPE_SWIFT = "Swift";



Function.extend(Database, Book);