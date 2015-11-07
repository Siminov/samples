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


if(window['document'] == undefined) {
    var ServiceException = require('../../Siminov/Exception/ServiceException');
    var Log = require('../../Siminov/Log/Log');
    
    var Liquor = require('../Models/Liquor');
    var LiquorConstants = require('../Constants');
    
    var XMLTools = require('./XMLDoc');
    
    module.exports = LiquorsReader;    
}


function LiquorsReader() {
	
	var liquors = new Array();
	
	this.parse = function(data) {
		
		Log.important("LiquorsReader", "parse", "DATA: " + data);
		

		var xmlDoc;
		if(window['document'] != undefined) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(data, "text/xml");
        } else {
            xmlDoc = new XMLTools(data, xmlError);
            
            function xmlError(e) {
                //there was an error, show the user
                alert(e);
            } //end function xmlError
        }
		
        var liquorsElement;
        if(window['document'] != undefined) {
            liquorsElement = xmlDoc.documentElement.childNodes;
        } else {
            var rootElement = xmlDoc.docNode;
            liquorsElement = rootElement.getElements("liquor");
        }
        
		for(var i = 0;i < liquorsElement.length;i++) {
		
            if(window['document'] != undefined) {
                
                var nodeName = liquorsElement[i].nodeName;
                if(nodeName == LiquorConstants.PARSER_ERROR) {
                    throw new ServiceException("LiquorsReader", "parse", "Error while parsing liquors.");
                } else if(nodeName === LiquorConstants.GET_LIQUORS_WS_LIQUOR) {
                
                    var liquor = parseLiquor(liquorsElement[i]);
                    liquors.push(liquor);
                }
            } else {
                var liquor = parseLiquor(liquorsElement[i]);
                liquors.push(liquor);
            }
		}
	}	

	
	function parseLiquor(liquorElement) {

		var liquor = new Liquor();
				
		var liquorProperties;
        if(window['document'] != undefined) {
            liquorProperties = liquorElement.childNodes;
        } else {
            liquorProperties = liquorElement.children;
        }
        
		for(var i = 0;i < liquorProperties.length;i++) {
            
            if(window['document'] != undefined) {
                
                if(liquorProperties[i].childNodes[0] == undefined || liquorProperties[i].childNodes[0] == null) {
                    continue;
                }
            }
			
            var nodeValue;
            if(window['document'] != undefined) {
                nodeName = liquorProperties[i].nodeName;
                nodeValue = liquorProperties[i].childNodes[0].nodeValue;
            } else {
                nodeName = liquorProperties[i].tagName;
                nodeValue = liquorProperties[i].getText();
            }
            

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