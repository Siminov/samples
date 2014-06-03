
function ServiceEventHandler() {


    this.triggerEvent = function(data) {

        var hybridSiminovDatas = SIJsonHelper.toSI(data);
        var datas = hybridSiminovDatas.getHybridSiminovDatas();

        var apiHandler;
        var event;

		var resources = new Dictionary();

		var connectionRequest;
		var connectionResponse;

        if(datas != undefined && datas != null && datas.length > 0) {

            for(var i = 0;i < datas.length;i++) {
                var data = datas[i];

                var dataType = data.getDataType();
                if(dataType === Constants.SIMINOV_ISERVICE_API_HANDLER) {
                    apiHandler = data.getDataValue();
                } else if(dataType === Constants.SIMINOV_ISERVICE_TRIGGERED_EVENT) {
					event = data.getDataValue();
                } else if(dataType === ConnectionRequest.NAME) {
					connectionRequest = SIDatasHelper.toModel(data);
                } else if(dataType === ConnectionResponse.NAME) {
                	connectionResponse = SIDatasHelper.toModel(data);
                	
                	var response = connectionResponse.getResponse();
                	if(response != undefined && response != null) {
                		response = decodeURIComponent(response);
                		connectionResponse.setResponse(response);
                	}
                } else if(dataType === Constants.SIMINOV_ISERVICE_RESOURCES) {
                	
                	var hybridResources = data.getDatas();
                	if(hybridResources != undefined && hybridResources != null && hybridResources.length > 0) {
                		
                		for(var j = 0;j < hybridResources.length;j++) {
                			
                			var hybridResource = hybridResources[j];
                			
                			var key = hybridResource.getDataType();
                			var value = hybridResource.getDataValue();
                			
                			resources.add(key, value);
                		}
                	}
                } 
            }
        }


        var eventHandler = FunctionUtils.createFunctionInstance(apiHandler);
        
        //Inflate Resources
        var resourceKeys = resources.keys();
        for(var i = 0;i < resourceKeys.length;i++) {
        	var resource = resources.get(resourceKeys[i]);
        	FunctionUtils.invokeAndInflate(eventHandler, Constants.SIMINOV_ISERVICE_ADD_RESOURCE, resourceKeys[i], resource);
        }
        

		//Invoke Event API
        if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_START) {
					
            FunctionUtils.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_QUEUE) {

            FunctionUtils.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_PAUSE) {

            FunctionUtils.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_RESUME) {
            
            FunctionUtils.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_FINISH) {

            FunctionUtils.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_API_INVOKE) {

			FunctionUtils.invokeAndInflate(eventHandler, event, connectionRequest);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_API_FINISH) {

			FunctionUtils.invokeAndInflate(eventHandler, event, connectionResponse);
        } else if(event === Constants.SIMINOV_ISERVICE_ON_SERVICE_TERMINATE) {

            FunctionUtils.invokeAndInflate(eventHandler, event);
        }
    }
}
