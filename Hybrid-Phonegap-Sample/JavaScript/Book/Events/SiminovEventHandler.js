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
    var ISiminovEvents = require('siminov/Events/ISiminovEvents');
    var Function = require('siminov/Function/Function');
    
    module.exports = SiminovEventHandler;    
}


function SiminovEventHandler() {

    this.onFirstTimeSiminovInitialized = function() {
        //initialize();
    }


    this.onSiminovInitialized = function() {
        //initialize();
    }


    this.onSiminovStopped = function() {
        exitApp();
    }

}


Function.implement(ISiminovEvents, SiminovEventHandler);