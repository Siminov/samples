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



var SyncHandler = (function() {

	var syncHandler;
	
	return {
	
		getInstance : function() {
			
			if(syncHandler == null) {
				syncHandler = new SyncHandler();
				
				syncHandler.constructor = null;
			}
			
			return syncHandler;
		}
	}
	

	function SyncHandler() {


		this.handle = function(syncRequest) {
			
			var hybridSiminovDatas = new HybridSiminovDatas();
				
			var hybridSyncRequest = new HybridSiminovDatas.HybridSiminovData();
			hybridSyncRequest.setDataType(Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST);

				var hybridSyncRequestName = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridSyncRequestName.setType(Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_NAME);
				hybridSyncRequestName.setValue(syncRequest.getName());
			
			hybridSyncRequest.addValue(hybridSyncRequestName);
			
				var resources = syncRequest.getResources();
				if(resources != undefined && resources != null && resources.length > 0) {
					
					var hybridResources = new HybridSiminovDatas.HybridSiminovData();
					hybridResources.setDataType(Constants.SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_RESOURCES);

					for(var i = 0;i < resources.length;i++) {
						
						var resourceName = resources[i];
						var resourceValue = syncRequest.getResource(resourceName);
						resourceValue = '' + resourceValue;
						
						var hybridResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
						hybridResource.setType(resourceName);
						hybridResource.setValue('' + resourceValue);
	
						hybridResources.addValue(hybridResource);
					}
	
					hybridSyncRequest.addData(hybridResources);
				}


			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequest);
									
									
			var data = encodeURI(SIJsonHelper.toJson(hybridSiminovDatas));

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SYNC_ADAPTER);
	        adapter.setHandlerName(Constants.SYNC_ADAPTER_HANDLE_HANDLER);

			adapter.addParameter(data);

			adapter.invoke();
		}		
	}
		
}) ();


