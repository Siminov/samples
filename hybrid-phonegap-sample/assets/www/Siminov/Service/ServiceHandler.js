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



/**
	Exposes classes which deal with services.
	Service is a client-side communication component that process and handles any hybrid service request. It performs long running operations in the background.
	A Service is a group of APIs which deals on one particular hybrid service.
	
	@module Service
*/



/**
	It exposes APIs to process service request

	@module Service
	@class ServiceHandler
	@constructor
*/
var ServiceHandler = (function() {

	var serviceHandler;
	
	return {
	
		/**
		 * Get singleton instance of Service Handler class
		 * 
		 * @method getInstance
		 * @return {ServiceHandler} Singleton instance of Service Handler
		 */
		getInstance: function() {
			if(serviceHandler == null) {
				serviceHandler = new ServiceHandler();
				
				serviceHandler.constructor = null;
			}
			
			return serviceHandler;
		}
	}
	

	function ServiceHandler() {
		
		this.handleAsync = function(iService, callback) {
			this.handle(iService, callback);
		}
		
		
		/**
		 * It handles the service request 
		 * 
		 * @method handler
		 * @param iService {Service} Service instance
		 */
		this.handle = function(iService) {

			var callback = arguments && arguments[1];

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SERVICE_ADAPTER);
	        adapter.setHandlerName(Constants.SERVICE_ADAPTER_INVOKE_HANDLER);
			

			var hybridServiceDatas = new HybridSiminovDatas();

			var hybridService = new HybridSiminovDatas.HybridSiminovData();
				hybridService.setDataType(Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE);

				
				var hybridServiceName = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridServiceName.setType(Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_NAME);
				hybridServiceName.setValue(iService.getService());
			
			hybridService.addValue(hybridServiceName)
			
				var hybridServiceValue = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridServiceValue.setType(Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_REQUEST);	
				hybridServiceValue.setValue(iService.getRequest());

			hybridService.addValue(hybridServiceValue);


				var resources = iService.getResources();
				if(resources != undefined && resources != null && resources.length > 0) {
					
					var hybridResources = new HybridSiminovDatas.HybridSiminovData();
						hybridResources.setDataType(Constants.SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_RESOURCES);
					
					for(var i = 0;i < resources.length;i++) {
						var resourceName = resources[i];
						var resourceValue = iService.getResource(resourceName);
						
						resourceValue = '' + resourceValue;
						
						var hybridResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
						hybridResource.setType(resourceName);
						hybridResource.setValue(resourceValue);
						
						hybridResources.addValue(hybridResource);
					}				
		
					hybridService.addData(hybridResources);	
				}


			hybridServiceDatas.addHybridSiminovData(hybridService)
			
			var data = encodeURI(SIJsonHelper.toJson(hybridServiceDatas, true));
			adapter.addParameter(data);


			if(callback == undefined || callback == null) {
				Adapter.invoke(adapter);
			} else {
				
				adapter.setCallback(serviceCallback);
				adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
				
				Adapter.invoke(adapter);		
				
				function serviceCallback() {
					callback && callback.onSuccess && callback.onSuccess();
				}	
			}
		}
	}
		
}) ();


