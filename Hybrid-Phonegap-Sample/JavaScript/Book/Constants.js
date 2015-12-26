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
    module.exports = BookConstants;
}


function BookConstants() {
    
}

//C Book Constants
BookConstants.C_DESCRIPTION = 'C Book Description';
BookConstants.C_AUTHOR = 'C book Author';
BookConstants.C_LINK = 'C Book Link';


//C++ Book Constants
BookConstants.C_PLUS_DESCRIPTION = 'C++ Book Description';
BookConstants.C_PLUS_AUTHOR = 'C++ Book Author';
BookConstants.C_PLUS_LINK = 'C++ Book Link';


//C# Book Constants
BookConstants.C_SHARP_DESCRIPTION = 'C# Book Description';
BookConstants.C_SHARP_AUTHOR = 'C# Book Author';
BookConstants.C_SHARP_LINK = 'C# Book Link';



//Java Constants
BookConstants.JAVA_DESCRIPTION = 'Java Book Description';
BookConstants.JAVA_AUTHOR = 'Java Book Author';
BookConstants.JAVA_LINK = 'Java Book Link';


//JavaScript Book Constants -->
BookConstants.JAVASCRIPT_DESCRIPTION = 'JavaScript Book Description';
BookConstants.JAVASCRIPT_AUTHOR = 'Javascript Book Author';
BookConstants.JAVASCRIPT_LINK = 'JavaScript Book Link';


//Objective-C Book Constants -->
BookConstants.OBJECTIVEC_DESCRIPTION = 'Objective - C Book Description';
BookConstants.OBJECTIVEC_AUTHOR = 'Objective - C Author';
BookConstants.OBJECTIVEC_LINK = 'Objective - C Link';


//Swift Book Constants -->
BookConstants.SWIFT_DESCRIPTION = 'Swift Description';
BookConstants.SWIFT_AUTHOR = 'Swift Author';
BookConstants.SWIFT_LINK = 'Swift Link';




//C First Lession Constants -->
BookConstants.C_FIRST_LESSION_NAME = 'First Lession';
BookConstants.C_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.C_FIRST_LESSION_LINK = 'First Lession Link';

//C Second Lession Constants -->
BookConstants.C_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.C_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.C_SECOND_LESSION_LINK = 'Second Lession Link';


//C++ First Constants -->
BookConstants.C_PLUS_FIRST_LESSION_NAME = 'First Lession';
BookConstants.C_PLUS_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.C_PLUS_FIRST_LESSION_LINK = 'First Lession Link';

//C++ Second Constants -->
BookConstants.C_PLUS_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.C_PLUS_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.C_PLUS_SECOND_LESSION_LINK = 'Second Lession Link';


//C# First Lession Constants -->
BookConstants.C_SHARP_FIRST_LESSION_NAME = 'First Lession';
BookConstants.C_SHARP_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.C_SHARP_FIRST_LESSION_LINK = 'First Lession Link';

//C# Second Lession Constants -->
BookConstants.C_SHARP_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.C_SHARP_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.C_SHARP_SECOND_LESSION_LINK = 'Second Lession Link';


//Java First Lession Constants -->
BookConstants.JAVA_FIRST_LESSION_NAME = 'First Lession';
BookConstants.JAVA_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.JAVA_FIRST_LESSION_LINK = 'First Lession Link';

//Java Second Lession Constants -->
BookConstants.JAVA_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.JAVA_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.JAVA_SECOND_LESSION_LINK = 'Second Lession Link';


//JavaScript First Lession Constants -->
BookConstants.JAVASCRIPT_FIRST_LESSION_NAME = 'First Lession';
BookConstants.JAVASCRIPT_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.JAVASCRIPT_FIRST_LESSION_LINK = 'First Lession Link';

//JavaScript Second Lession Constants -->
BookConstants.JAVASCRIPT_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.JAVASCRIPT_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.JAVASCRIPT_SECOND_LESSION_LINK = 'Second Lession Link';


//Objective C First Lession Constants -->
BookConstants.OBJECTIVEC_FIRST_LESSION_NAME = 'First Lession';
BookConstants.OBJECTIVEC_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.OBJECTIVEC_FIRST_LESSION_LINK = 'First Lession Link';


//Objective C Second Lession Constants -->
BookConstants.OBJECTIVEC_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.OBJECTIVEC_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.OBJECTIVEC_SECOND_LESSION_LINK = 'Second Lession Link';


//Swift First Lession -->
BookConstants.SWIFT_FIRST_LESSION_NAME = 'First Lession';
BookConstants.SWIFT_FIRST_LESSION_DESCRIPTION = 'First Lession Description';
BookConstants.SWIFT_FIRST_LESSION_LINK = 'First Lession Link';


//Swift Second Lession -->
BookConstants.SWIFT_SECOND_LESSION_NAME = 'Second Lession';
BookConstants.SWIFT_SECOND_LESSION_DESCRIPTION = 'Second Lession Description';
BookConstants.SWIFT_SECOND_LESSION_LINK = 'Second Lession Link';





/*
 * Sync Constants
 */
BookConstants.SYNC_BOOKS = "SYNC-BOOKS";
BookConstants.SYNC_LESSIONS = "SYNC-LESSIONS";


BookConstants.PARSER_ERROR = "parsererror";

BookConstants.GET_BOOKS_WS_BOOKS = 'books';
BookConstants.GET_BOOKS_WS_BOOK = 'book';
BookConstants.GET_BOOKS_WS_BOOK_TITLE = 'name';
BookConstants.GET_BOOKS_WS_BOOK_DESCRIPTION = 'description';
BookConstants.GET_BOOKS_WS_BOOK_AUTHOR = 'author';
BookConstants.GET_BOOKS_WS_BOOK_LINK = 'link';



BookConstants.GET_LESSIONS_WS_LESSIONS = 'lessions';
BookConstants.GET_LESSIONS_WS_LESSION = 'lession';
BookConstants.GET_LESSIONS_WS_LESSION_NAME = 'name';
BookConstants.GET_LESSIONS_WS_LESSION_DESCRIPTION = 'description';
BookConstants.GET_LESSIONS_WS_LESSION_LINK = 'link';



BookConstants.ASYNC_REQUEST = "ASYNC";
BookConstants.ASYNC_TRANSACTION_REQUEST = "ASYNC-TRANSACTION";
BookConstants.SYNC_REQUEST = "SYNC";


BookConstants.REQUEST = BookConstants.ASYNC_REQUEST;

