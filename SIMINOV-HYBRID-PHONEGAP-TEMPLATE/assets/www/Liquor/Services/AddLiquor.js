


function AddLiquor() {

	setService(AddLiquor.SERVICE_NAME);
	setApi(AddLiquor.API_NAME);
	
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
		
		if(connectionRequest.getDataStream() == null) {
			return;
		}
		
		
		var liquorType = getResource(AddLiquor.LIQUOR);
		var liquor = null;
		
		try {
			var liquors = new Liquor().select().where(Liquor.LIQUOR_TYPE).equalTo(liquorType).execute();
			if(liquors != null && liquors.length > 0) {
				liquor = liquors[0];
			}
		} catch(de) {
			Log.error("AddLiquor", "onServiceApiInvoke", "Database Exception caught while getting liquor from database, " + de.getMessage());
			return;
		}
		
		
		var liquorWritter = new LiquorWritter();
		var dataStream = liquorWritter.build(liquor);
		
		connectionRequest.setDataStream(dataStream);
	}

	this.onServiceApiFinish = function(connectionResponse) {
		
	}

	this.onServiceTerminate = function(serviceException) {
		
	}
}



AddLiquor.SERVICE_NAME = "SIMINOV-HYBRID-LIQUORS-SERVICE";
AddLiquor.API_NAME = "ADD-LIQUOR";

AddLiquor.LIQUOR = "LIQUOR";


FunctionUtils.extend(Service, AddLiquor);
