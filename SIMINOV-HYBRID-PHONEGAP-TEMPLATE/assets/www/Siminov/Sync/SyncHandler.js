

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
			alert("handle");
			
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
				
				var resourceKeys = resources.keys();
				alert("rsource keys: " + resourceKeys.length);
				for(var i = 0;i < resourceKeys.length;i++) {
					
					var resource = resources.get(resourceKeys[i]);
					
					var hybridResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
					hybridResource.setType(resourceKeys[i]);
					hybridResource.setValue(resource);
					
					alert("resource: " + resourceKeys[i] + ", " + resource);
					hybridSyncRequestResources.addValue(hybridResource);
				}
			}


			hybridSyncRequest.addData(hybridSyncRequestResources);
			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequest);
									
			
			var data = SIJsonHelper.toJson(hybridSiminovDatas);
			alert("data: " + data);
						
			adapter.addParameter(encodeURI(data));
			adapter.invoke();
		}		
	}

		
}) ();


