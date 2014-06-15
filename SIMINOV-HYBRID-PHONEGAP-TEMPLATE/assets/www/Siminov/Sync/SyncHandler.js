

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
			hybridSyncRequest.setDataType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST);

				var hybridSyncRequestName = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridSyncRequestName.setType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_NAME);
				hybridSyncRequestName.setValue(syncRequest.getName());
			
			hybridSyncRequest.addValue(hybridSyncRequestName);
			
				var resources = syncRequest.getResources();
				if(resources != undefined && resources != null && resources.length > 0) {
					
					var hybridResources = new HybridSiminovDatas.HybridSiminovData();
					hybridResources.setDataType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_RESOURCES);
	
					for(var i = 0;i < resources.length;i++) {
						
						var nameValuePair = resources[i];
						
						var resourceKey = nameValuePair.getName();
						var resourceValue = nameValuePair.getValue();
						resourceValue = '' + resourceValue;
						
						var hybridResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
						hybridResource.setType(resourceKey);
						hybridResource.setValue('' + resourceValue);
	
						hybridResources.addValue(hybridResource);
					}
	
					hybridSyncRequest.addData(hybridResources);
				}


			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequest);
									
									
			var data = encodeURI(SIJsonHelper.toJson(hybridSiminovDatas));

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_SYNC_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER);

			adapter.addParameter(data);

			adapter.invoke();
		}		
	}
		
}) ();


