
function LiquorBrand() {

    var liquor;

    var brandName;
    var description;
    var link;
    var country;

    this.getLiquor = function() {
        return liquor;
    }

    this.setLiquor = function(val) {
        liquor = val;
    }

    this.getBrandName = function() {
        return brandName;
    }

    this.setBrandName = function(val) {
        brandName = val;
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

    this.getCountry = function() {
        return country;
    }

    this.setCountry = function(val) {
        country = val;
    }

}

//Table Name
LiquorBrand.TABLE_NAME = "LIQUOR_BRAND";

//Column Names
LiquorBrand.LIQUOR_TYPE = "LIQUOR_TYPE";
LiquorBrand.BRAND_NAME = "BRAND_NAME";
LiquorBrand.DESCRIPTION = "DESCRIPTION";
LiquorBrand.LINK = "LINK";
LiquorBrand.COUNTRY = "COUNTRY";

//Gin Brands
LiquorBrand.GIN_BRAND_THE_BOTANIST = "The Botanist";
LiquorBrand.GIN_BRAND_TANQUERAY = "Tanqueray";


//Rum Brands
LiquorBrand.RUM_BRAND_BACARDI = "Bacardi";
LiquorBrand.RUM_BRAND_OLD_MONK = "Old Monk";


//Tequila Brand
LiquorBrand.TEQUILA_BRAND_PATRON = "Patron";
LiquorBrand.TEQUILA_BRAND_SAUZA = "Sauza";

//Vodka Brand
LiquorBrand.VODKA_BRAND_SMIRNOFF = "Smirnoff";
LiquorBrand.VODKA_BRAND_ABSOLUT = "Absolut";

//Whiskey - Bourbons Brands
LiquorBrand.WHISKEY_BRAND_JOHNNIE_WALKER = "Johnnie Walker";
LiquorBrand.WHISKEY_BRAND_JACK_DANIELS = "Jack Daniels";


//Beer Brands
LiquorBrand.BEER_BRAND_KINGFISHER = "Kingfisher";
LiquorBrand.BEER_BRAND_HEINEKEN = "Heineken";

//Wine Brands
LiquorBrand.WINE_BRAND_YELLOW_TAIL = "Yellow Tail";
LiquorBrand.WINE_BRAND_GALLO = "Gallo";



FunctionUtils.extend(Database, LiquorBrand);