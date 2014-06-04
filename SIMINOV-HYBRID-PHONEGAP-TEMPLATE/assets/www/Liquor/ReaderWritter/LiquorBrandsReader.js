
function LiquorBrandsReader() {
	
	var liquorBrands = new Array();
	
	this.parse = function(data) {

		Log.important("LiquorBrandsReader", "parse", "DATA: " + data);
		
		var xmlDoc;
		if(window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(data, "text/xml");
		}
		
		var rootElement = xmlDoc.documentElement.childNodes;
		for(var i = 0;i < rootElement.length;i++) {
		
			var nodeName = rootElement[i].nodeName;			

			if(nodeName == PARSER_ERROR) {
				throw new ServiceException("LiquorBrandsReader", "parse", "Error while parsing liquor brands.");					
			} else if(nodeName === GET_LIQUOR_BRANDS_WS_BRAND) {

				var liquorBrand = parseLiquorBrand(rootElement[i]);
				liquorBrands.push(liquorBrand);
			}			
		}		
	}	

	
	function parseLiquorBrand(liquorBrandElement) {

		var liquorBrand = new LiquorBrand();
				
		var liquorBrandProperties = liquorBrandElement.childNodes;
		for(var i = 0;i < liquorBrandProperties.length;i++) {
			
			if(liquorBrandProperties[i].childNodes[0] == undefined || liquorBrandProperties[i].childNodes[0] == null) {
				continue;				
			}

			nodeName = liquorBrandProperties[i].nodeName;
			var nodeValue = liquorBrandProperties[i].childNodes[0].nodeValue; 

			if(nodeName === GET_LIQUOR_BRANDS_WS_BRAND_NAME) {
				liquorBrand.setBrandName(nodeValue);
			} else if(nodeName === GET_LIQUOR_BRANDS_WS_BRAND_COUNTRY) {
				liquorBrand.setCountry(nodeValue);
			} else if(nodeName === GET_LIQUOR_BRANDS_WS_BRAND_DESCRIPTION) {
				liquorBrand.setDescription(nodeValue);
			} else if(nodeName === GET_LIQUOR_BRANDS_WS_BRAND_LINK) {
				liquorBrand.setLink(nodeValue);
			}
		}
		
		return liquorBrand;
	}
	
	this.getLiquorBrands = function() {
		return liquorBrands;		
	}
}