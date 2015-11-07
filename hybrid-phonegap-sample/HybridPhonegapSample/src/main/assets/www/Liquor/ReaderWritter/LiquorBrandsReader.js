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
    var Function = require('../../Siminov/Function/Function');
    var ServiceException = require('../../Siminov/Exception/ServiceException');
    var Log = require('../../Siminov/Log/Log');
    
    var LiquorBrand = require('../Models/LiquorBrand');
    var LiquorConstants = require('../Constants');
    
    var XMLTools = require('./XMLDoc');
    
    module.exports = LiquorBrandsReader;    
}


function LiquorBrandsReader() {
	
	var liquorBrands = new Array();
	
	this.parse = function(data) {

		Log.important("LiquorBrandsReader", "parse", "DATA: " + data);
		
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
        
		
		//var rootElement =
        var liquorBrandsElement;
        if(window['document'] != undefined) {
            liquorBrandsElement = xmlDoc.documentElement.childNodes;
        } else {
            var rootElement = xmlDoc.docNode;
            liquorBrandsElement = rootElement.getElements("brand");
        }
        
        
		for(var i = 0;i < liquorBrandsElement.length;i++) {
		
            if(window['document'] != undefined) {
                
                var nodeName = liquorBrandsElement[i].nodeName;
                
                if(nodeName == LiquorConstants.PARSER_ERROR) {
                	throw new ServiceException("LiquorBrandsReader", "parse", "Error while parsing liquor brands.");
                } else if(nodeName === LiquorConstants.GET_LIQUOR_BRANDS_WS_BRAND) {
                
                    var liquorBrand = parseLiquorBrand(liquorBrandsElement[i]);
                    liquorBrands.push(liquorBrand);
                }
            } else {
                
                var liquorBrand = parseLiquorBrand(liquorBrandsElement[i]);
                liquorBrands.push(liquorBrand);
            }
		}
	}	

	
	function parseLiquorBrand(liquorBrandElement) {

		var liquorBrand = new LiquorBrand();
		
        var liquorBrandProperties;
        if(window['document'] != undefined) {
            liquorBrandProperties = liquorBrandElement.childNodes;
        } else {
            liquorBrandProperties = liquorBrandElement.children;
        }
		
        for(var i = 0;i < liquorBrandProperties.length;i++) {
			
            if(window['document'] != undefined) {
                
                if(liquorBrandProperties[i].childNodes[0] == undefined || liquorBrandProperties[i].childNodes[0] == null) {
                    continue;
                }
            }
            
            var nodeValue;
            if(window['document'] != undefined) {
                nodeName = liquorBrandProperties[i].nodeName;
                nodeValue = liquorBrandProperties[i].childNodes[0].nodeValue;
            } else {
                nodeName = liquorBrandProperties[i].tagName;
                nodeValue = liquorBrandProperties[i].getText();
            }

			if(nodeName === LiquorConstants.GET_LIQUOR_BRANDS_WS_BRAND_NAME) {
				liquorBrand.setBrandName(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUOR_BRANDS_WS_BRAND_COUNTRY) {
				liquorBrand.setCountry(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUOR_BRANDS_WS_BRAND_DESCRIPTION) {
				liquorBrand.setDescription(nodeValue);
			} else if(nodeName === LiquorConstants.GET_LIQUOR_BRANDS_WS_BRAND_LINK) {
				liquorBrand.setLink(nodeValue);
			}
		}
		
		return liquorBrand;
	}
	
	this.getLiquorBrands = function() {
		return liquorBrands;		
	}
}