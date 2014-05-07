
function GetLiquorBrands() {

	setService(GetLiquorBrands.SERVICE_NAME);
	setApi(GetLiquorBrands.API_NAME);

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
	
		if(connectionResponse.getResponse() == null) {
			return;
		}
		
		
		var liquor = getResource(GetLiquorBrands.LIQUOR);
		var uiComponent = getResource(GetLiquorBrands.UI_COMPONENT);
		
		var liquorBrandsReader = new LiquorBrandsReader(connectionResponse.getResponse());
		var liquorBrands = liquorBrandsReader.getLiquorBrands();
		
		for(var i = 0;i < liquorBrands.length;i++) {
			var liquorBrand = liquorBrands[i];
			liquorBrand.setLiquor(liquor);
			
			try {
				liquorBrand.saveOrUpdate();
			} catch(de) {
				Log.loge("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}
		
		
		uiComponent();
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}



GetLiquorBrands.SERVICE_NAME = "SIMINOV-HYBRID-LIQUOR-BRANDS-SERVICE";
GetLiquorBrands.API_NAME = "GET-LIQUOR-BRANDS";

GetLiquorBrands.LIQUOR_NAME = "LIQUOR-NAME";
GetLiquorBrands.LIQUOR = "LIQUOR";
GetLiquorBrands.UI_COMPONENT = "UI_COMPONENT";


FunctionUtils.extend(Service, GetLiquorBrands);
