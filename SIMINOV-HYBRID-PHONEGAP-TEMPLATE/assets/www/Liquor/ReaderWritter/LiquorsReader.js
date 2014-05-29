

function LiquorsReader() {
	
	var liquors = new Array();
	
	this.parse = function(data) {
		
		Log.important("LiquorsReader", "parse", "DATA: " + data);
		

		var xmlDoc;
		if(window.DOMParser) {
			var parser = new DOMParser();
			xmlDoc = parser.parseFromString(data, "text/xml");
		}
		
		var rootElement = xmlDoc.documentElement.childNodes;
		for(var i = 0;i < rootElement.length;i++) {
		
			var nodeName = rootElement[i].nodeName;			

			if(nodeName == PARSER_ERROR) {
				throw new ServiceException("LiquorsReader", "parse", "Error while parsing liquors.");					
			} else if(nodeName === GET_LIQUORS_WS_LIQUOR) {

				var liquor = parseLiquor(rootElement[i]);
				liquors.push(liquor);
			}			
		}		
	}	

	
	function parseLiquor(liquorElement) {

		var liquor = new Liquor();
				
		var liquorProperties = liquorElement.childNodes;
		for(var i = 0;i < liquorProperties.length;i++) {
			
			if(liquorProperties[i].childNodes[0] == undefined || liquorProperties[i].childNodes[0] == null) {
				continue;				
			}

			nodeName = liquorProperties[i].nodeName;
			var nodeValue = liquorProperties[i].childNodes[0].nodeValue; 

			if(nodeName === GET_LIQUORS_WS_LIQUOR_NAME) {
				liquor.setLiquorType(nodeValue);
			} else if(nodeName === GET_LIQUORS_WS_LIQUOR_DESCRIPTION) {
				liquor.setDescription(nodeValue);
			} else if(nodeName === GET_LIQUORS_WS_LIQUOR_HISTROY) {
				liquor.setHistory(nodeValue);
			} else if(nodeName === GET_LIQUORS_WS_LIQUOR_LINK) {
				liquor.setLink(nodeValue);
			} else if(nodeName === GET_LIQUORS_WS_LIQUOR_ALCHOL_CONTENT) {
				liquor.setAlcholContent(nodeValue);
			}
		}
		
		return liquor;
	}
	
	this.getLiquors = function() {
		return liquors;		
	}
}