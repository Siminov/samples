
function GetLiquors() {

	setService(GetLiquors.SERVICE_NAME);
	setApi(GetLiquors.API_NAME);
	
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
		
		var uiComponent = getResource(GetLiquors.UI_COMPONENT);
		
		var liquorsReader = new LiquorsReader(connectionResponse.getResponse());
		var liquors = liquorsReader.getLiquors();
		
		for(var i = 0;i < liquors.length;i++) {
			var liquor = liquors[i];
			
			try {
				liquor.saveOrUpdate();
			} catch(de) {
				Log.loge("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
			}
		}
		
		uiComponent();
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}



GetLiquors.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
GetLiquors.API_NAME = "GET-LIQUORS";

GetLiquors.UI_COMPONENT = "UI_COMPONENT";


FunctionUtils.extend(Service, GetLiquors);
