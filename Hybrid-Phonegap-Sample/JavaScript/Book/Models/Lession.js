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
    var Database = require('../../Siminov/Database/Database');
    var Function = require('../../Siminov/Function/Function');

    module.exports = Lession;
}


function Lession() {

    Database.apply(this, arguments);

    var book;

    var name;
    var description;
    var link;

    this.getBook = function() {
        return book;
    }

    this.setBook = function(val) {
        book = val;
    }

    this.getName = function() {
        return name;
    }

    this.setName = function(val) {
        name = val;
    }

    this.getDescription = function() {
        return description;
    }

    this.setDescription = function(val) {
        description = val;
    }

    this.getLink = function() {
        return link;
    }

    this.setLink = function(val) {
        link = val;
    }

}

//Table Name
Lession.TABLE_NAME = "LESSION";

//Column Names
Lession.BOOK_TITLE = "TITLE";
Lession.NAME = "NAME";
Lession.DESCRIPTION = "DESCRIPTION";
Lession.LINK = "LINK";

//C Lession
Lession.C_FIRST_LESSION = "C First Lession";
Lession.C_SECOND_LESSION = "C Second Lession";


//C++ Lession
Lession.C_PLUS_FIRST_LESSION = "C++ First Lession";
Lession.C_PLUS_SECOND_LESSION = "C++ Second Lession";


//C# Lession
Lession.C_SHARP_FIRST_LESSION = "C# First Lession";
Lession.C_SHARP_SECOND_LESSION = "C# Second Lession";

//Java Lession
Lession.JAVA_FIRST_LESSION = "Java First Lession";
Lession.JAVA_SECOND_LESSION = "Java Second Lession";

//JavaScript Lession
Lession.JAVASCRIPT_FIRST_LESSION = "JavaScript First Lession";
Lession.JAVASCRIPT_SECOND_LESSION = "JavaScript Second Lession";


//Objective C Lession
Lession.OBJECTIVEC_FIRST_LESSION = "Objective C First Lession";
Lession.OBJECTIVEC_SECOND_LESSION = "Objective C Second Lession";

//Swift Lession
Lession.SWIFT_FIRST_LESSION = "Swift First Lession";
Lession.SWIFT_SECOND_LESSION = "Swift Second Lession";



Function.extend(Database, Lession);