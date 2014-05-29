
function ServiceEventHandler() {


    this.triggerEvent = function(data) {

        var hybridSiminovDatas = SIJsonHelper.toSI(data);
        var datas = hybridSiminovDatas.getHybridSiminovDatas();

        var apiHandler;
        var event;

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
                }
            }
        }


        var eventHandler = FunctionUtils.createFunctionInstance(apiHandler);
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
