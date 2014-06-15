

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
			
	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_SYNC_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER);
			
			var hybridSiminovDatas = new HybridSiminovDatas();
				
			var hybridSyncRequest = new HybridSiminovDatas.HybridSiminovData();
			hybridSyncRequest.setDataType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST);

			var hybridSyncRequestName = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
			hybridSyncRequestName.setType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_NAME);
			hybridSyncRequestName.setValue(syncRequest.getName());
			
			hybridSyncRequest.addValue(hybridSyncRequestName);
			
			var hybridSyncRequestResources = new HybridSiminovDatas.HybridSiminovData();
			hybridSyncRequestResources.setDataType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_RESOURCES);
			

			var resources = syncRequest.getResources();
			if(resources != undefined && resources != null) {
				
				for(var i = 0;i < resources.length;i++) {
					
					var nameValuePair = resources[i];
					
					var resourceKey = nameValuePair.getName();
					var resourceValue = nameValuePair.getValue();
					
					var hybridResource = new HybridSiminovDatas.HybridSiminovData();
					hybridResource.setDataType(resourceKey);
					hybridResource.setDataValue('' + resourceValue);
					alert("resource: " + hybridResource.getDataValue());					
					hybridSyncRequestResources.addData(hybridResource);
				}
			}


			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequest);
			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequestResources);
									
			
			var data = SIJsonHelper.toJson(hybridSiminovDatas);
			adapter.addParameter(encodeURI(data));

			adapter.invoke();
		}		
	}

		
}) ();


