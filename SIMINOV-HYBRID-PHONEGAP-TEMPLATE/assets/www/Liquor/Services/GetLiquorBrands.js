

GetLiquorBrands.SERVICE_NAME = "SIMINOV-HYBRID-LIQUOR-BRANDS-SERVICE";
GetLiquorBrands.API_NAME = "GET-LIQUOR-BRANDS";

GetLiquorBrands.LIQUOR_NAME = "LIQUOR-NAME";
GetLiquorBrands.LIQUOR = "LIQUOR";
GetLiquorBrands.UI_COMPONENT = "UI_COMPONENT";


function GetLiquorBrands() {

	this.onServiceStart = function() {

	}

	this.onServiceQueue = function() {
		
	}

	this.onServicePause = function() {
		
	}

	this.onServiceResume = function() {
			
	}

	this.onServiceFinish = function() {
		
	}

	this.onServiceApiInvoke = function(connectionRequest) {
	
	}

	this.onServiceApiFinish = function(connectionResponse) {
		//alert("onServiceApiFinish");
	
		if(connectionResponse.getResponse() == null) {
			return;
		}
		
		
		var liquor = this.getResource(GetLiquorBrands.LIQUOR);
		var uiComponent = this.getResource(GetLiquorBrands.UI_COMPONENT);
		
		var liquorBrandsReader = new LiquorBrandsReader(connectionResponse.getResponse());
		var liquorBrands = liquorBrandsReader.getLiquorBrands();
		
		for(var i = 0;i < liquorBrands.length;i++) {
			var liquorBrand = liquorBrands[i];
			liquorBrand.setLiquor(liquor);
			
			try {
				liquorBrand.saveOrUpdate();
			} catch(de) {
				Log.error("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}
		

		uiComponent.call();
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}


FunctionUtils.extend(Service, GetLiquorBrands);
