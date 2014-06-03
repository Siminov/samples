

GetLiquors.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
GetLiquors.API_NAME = "GET-LIQUORS";

GetLiquors.UI_COMPONENT = "UI_COMPONENT";


function GetLiquors() {

	this.onServiceStart = function() {
		alert("onServiceStart");		
	}

	this.onServiceQueue = function() {
		alert("onServiceQueue");
	}

	this.onServicePause = function() {
		alert("onServicePause");
	}

	this.onServiceResume = function() {
		alert("onServiceResume");
	}

	this.onServiceFinish = function() {
		alert("onServiceFinish");
	}

	this.onServiceApiInvoke = function(connectionRequest) {
		//alert("onServiceApiInvoke");
	}

	this.onServiceApiFinish = function(connectionResponse) {
		//alert("onServiceApiFinish");

		var uiComponent = this.getResource(GetLiquors.UI_COMPONENT);
		
		var liquorsReader = new LiquorsReader();
		liquorsReader.parse(connectionResponse.getResponse());
		
		var liquors = liquorsReader.getLiquors();
		if(liquors != undefined && liquors != null && liquors.length > 0) {
			
			for(var i = 0;i < liquors.length;i++) {

				var liquor = liquors[i];
				
				try {
					liquor.saveOrUpdate();
				} catch(de) {
					Log.error("GetLiquors", "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
				}
			}
		}		
		
		
		uiComponent.call();
	}

	this.onServiceTerminate = function(serviceException) {
		alert("onServiceTerminate");
	}
}


FunctionUtils.extend(Service, GetLiquors);
