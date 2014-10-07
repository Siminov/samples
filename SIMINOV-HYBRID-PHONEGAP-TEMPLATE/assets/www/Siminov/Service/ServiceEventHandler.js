/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/


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
                if(dataType === Constants.ISERVICE_API_HANDLER) {
                    apiHandler = data.getDataValue();
                } else if(dataType === Constants.ISERVICE_TRIGGERED_EVENT) {
					event = data.getDataValue();
                } else if(dataType === Constants.ISERVICE_CONNECTION_REQUEST) {
					connectionRequest = SIDatasHelper.toModel(data);
                } else if(dataType === Constants.ISERVICE_CONNECTION_RESPONSE) {
                	connectionResponse = SIDatasHelper.toModel(data);
                	
                	var response = connectionResponse.getResponse();
                	if(response != undefined && response != null) {
                		response = decodeURIComponent(response);
                		connectionResponse.setResponse(response);
                	}
                } else if(dataType === Constants.ISERVICE_RESOURCES) {
                	
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


        var eventHandler = Function.createFunctionInstance(apiHandler);
        
        //Inflate Resources
        var resourceKeys = resources.keys();
        for(var i = 0;i < resourceKeys.length;i++) {
        	var resourceName = resourceKeys[i];
        	var resourceValue = resources.get(resourceName);
        	
        	Function.invokeAndInflate(eventHandler, Constants.ISERVICE_ADD_RESOURCE, resourceName, resourceValue);
        }
        

		//Invoke Event API
        if(event === Constants.ISERVICE_ON_SERVICE_START) {
					
            Function.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.ISERVICE_ON_SERVICE_QUEUE) {

            Function.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.ISERVICE_ON_SERVICE_PAUSE) {

            Function.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.ISERVICE_ON_SERVICE_RESUME) {
            
            Function.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.ISERVICE_ON_SERVICE_FINISH) {

            Function.invokeAndInflate(eventHandler, event);
        } else if(event === Constants.ISERVICE_ON_SERVICE_REQUEST_INVOKE) {

			Function.invokeAndInflate(eventHandler, event, connectionRequest);
        } else if(event === Constants.ISERVICE_ON_SERVICE_REQUEST_FINISH) {

			Function.invokeAndInflate(eventHandler, event, connectionResponse);
        } else if(event === Constants.ISERVICE_ON_SERVICE_TERMINATE) {

            Function.invokeAndInflate(eventHandler, event);
        }
    }
}
