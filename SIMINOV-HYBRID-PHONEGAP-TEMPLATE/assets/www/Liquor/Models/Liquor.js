
function Liquor() {

    var liquorType;
    var description;
    var history;
    var link;
    var alcholContent;

	var liquorBrands = [];

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

	this.addLiquorBrand = function(liquorBrand) {
		liquorBrands[liquorBrands.length] = liquorBrand;
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



FunctionUtils.extend(Database, Liquor);