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


var ServiceException = require('../../Siminov/Exception/ServiceException');
var Log = require('../../Siminov/Log/Log');

var Liquor = require('../Models/Liquor');
var LiquorConstants = require('../Constants');

var XMLTools = require('./XMLDoc');

module.exports = LiquorsReader;


function LiquorsReader() {
	
	var liquors = new Array();
	
	this.parse = function(data) {
		
		Log.important("LiquorsReader", "parse", "DATA: " + data);
		

		var xmlDoc;
		if(window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(data, "text/xml");
        } else {
            xmlDoc = new XMLTools(data, xmlError);
            
            function xmlError(e) {
                //there was an error, show the user
                alert(e);
            } //end function xmlError
        }
		
		//var rootElement = xmlDoc.documentElement.childNodes;
        var rootElement = xmlDoc.docNode;
        var liquorsElement = rootElement.getElements("liquor");
		for(var i = 0;i < liquorsElement.length;i++) {
		
			//var nodeName = liquorsElement[i].nodeName;
            //var nodeName = liquorsElement[i];

			//if(nodeName == PARSER_ERROR) {
				//throw new ServiceException("LiquorsReader", "parse", "Error while parsing liquors.");
			//} else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR) {

				var liquor = parseLiquor(liquorsElement[i]);
				liquors.push(liquor);
			//}
		}		
	}	

	
	function parseLiquor(liquorElement) {

		var liquor = new Liquor();
				
		//var liquorProperties = liquorElement.childNodes;
        var liquorProperties = liquorElement.children;

		for(var i = 0;i < liquorProperties.length;i++) {
			
			nodeName = liquorProperties[i].tagName;
			var nodeValue = liquorProperties[i].getText();

			if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR_NAME) {
				liquor.setLiquorType(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR_DESCRIPTION) {
				liquor.setDescription(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR_HISTROY) {
				liquor.setHistory(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR_LINK) {
				liquor.setLink(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR_ALCHOL_CONTENT) {
				liquor.setAlcholContent(nodeValue);
			}
		}
		
		return liquor;
	}
	
	this.getLiquors = function() {
		return liquors;		
	}
}