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
    var Function = require('../../Siminov/Function/Function');
    var ServiceException = require('../../Siminov/Exception/ServiceException');
    var Log = require('../../Siminov/Log/Log');

    var Lession = require('../Models/Lession');
    var BookConstants = require('../Constants');

    var XMLTools = require('./XMLDoc');

    module.exports = LessionsReader;
}


function LessionsReader() {

	var lessions = new Array();

	this.parse = function(data) {
        console.log('parse');
		Log.important("LessionsReader", "parse", "DATA: " + data);

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


		//var rootElement =
        var lessionsElement;
        if(dom != undefined) {
            lessionsElement = xmlDoc.documentElement.childNodes;
        } else {
            var rootElement = xmlDoc.docNode;
            lessionsElement = rootElement.getElements("lession");
        }


		for(var i = 0;i < lessionsElement.length;i++) {

            if(dom != undefined) {

                var nodeName = lessionsElement[i].nodeName;

                if(nodeName == BookConstants.PARSER_ERROR) {
                	throw new ServiceException("LessionsReader", "parse", "Error while parsing lessions.");
                } else if(nodeName === BookConstants.GET_LESSIONS_WS_LESSION) {

                    var lession = parseLession(lessionsElement[i]);
                    lessions.push(lession);
                }
            } else {

                var lession = parseLession(lessionsElement[i]);
                lessions.push(lession);
            }
		}
	}


	function parseLession(lessionElement) {

		var lession = new Lession();

        var lessionProperties;
        if(dom != undefined) {
            lessionProperties = lessionElement.childNodes;
        } else {
            lessionProperties = lessionElement.children;
        }

        for(var i = 0;i < lessionProperties.length;i++) {

            if(dom != undefined) {

                if(lessionProperties[i].childNodes[0] == undefined || lessionProperties[i].childNodes[0] == null) {
                    continue;
                }
            }

            var nodeValue;
            if(dom != undefined) {
                nodeName = lessionProperties[i].nodeName;
                nodeValue = lessionProperties[i].childNodes[0].nodeValue;
            } else {
                nodeName = lessionProperties[i].tagName;
                nodeValue = lessionProperties[i].getText();
            }

			if(nodeName === BookConstants.GET_LESSIONS_WS_LESSION_NAME) {
				lession.setName(nodeValue);
			} else if(nodeName === BookConstants.GET_LESSIONS_WS_LESSION_DESCRIPTION) {
				lession.setDescription(nodeValue);
			} else if(nodeName === BookConstants.GET_LESSIONS_WS_LESSION_LINK) {
				lession.setLink(nodeValue);
			}
		}

		return lession;
	}

	this.getLessions = function() {
		return lessions;
	}
}