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

var Database = require('../../Siminov/Database/Database');
var Function = require('../../Siminov/Function/Function');

module.exports = Liquor;


function Liquor() {

    var liquorType;
    var description;
    var history;
    var link;
    var alcholContent;

	var liquorBrands = new Array();

    this.getLiquorType = function() {
        return liquorType;
    }

    this.setLiquorType = function(val) {
        liquorType = val;
    }

    this.getDescription = function() {
        return description;
    }

    this.setDescription = function(val) {
        description = val;
    }

    this.getHistory = function() {
        return history;
    }

    this.setHistory = function(val) {
        history = val;
    }

    this.getLink = function() {
        return link;
    }

    this.setLink = function(val) {
        link = val;
    }

    this.getAlcholContent = function() {
        return alcholContent;
    }

    this.setAlcholContent = function(val) {
        alcholContent = val;
    }


	this.getLiquorBrands = function() {
		return liquorBrands;
	}

	this.removeLiquorBrands = function() {
		liquorBrands = new Array();
	}

	this.addLiquorBrand = function(liquorBrand) {
		liquorBrands.push(liquorBrand);
	}
}


//Table Name
Liquor.TABLE_NAME = "LIQUOR";


//Column Names
Liquor.LIQUOR_TYPE = "LIQUOR_TYPE";
Liquor.DESCRIPTION = "DESCRIPTION";
Liquor.HISTORY = "HISTORY";
Liquor.LINK = "LINK";
Liquor.ALCHOL_CONTENT = "ALCHOL_CONTENT";

Liquor.LIQUOR_TYPE_GIN = "Gin";
Liquor.LIQUOR_TYPE_RUM = "Rum";
Liquor.LIQUOR_TYPE_TEQUILA = "Tequila";
Liquor.LIQUOR_TYPE_VODKA = "Vodka";
Liquor.LIQUOR_TYPE_WHISKEY = "Whiskey";
Liquor.LIQUOR_TYPE_BEER = "Beer";
Liquor.LIQUOR_TYPE_WINE = "Wine";



Function.extend(Database, Liquor);