

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
			
			var hybridSyncRequestInlineResources = new HybridSiminovDatas.HybridSiminovData();
			hybridSyncRequestInlineResources.setDataType(Constants.SIMINOV_SYNC_ADAPTER_HANDLE_HANDLER_SYNC_REQUEST_INLINE_RESOURCES);
			

			var inlineResources = syncRequest.getInlineResources();
			if(inlineResources != undefined && inlineResources != null) {
				
				var inlineResourceKeys = inlineResources.keys();
				alert("inline rsource keys: " + inlineResourceKeys.length);
				for(var i = 0;i < inlineResourceKeys.length;i++) {
					
					var inlineResource = inlineResources.get(inlineResourceKeys[i]);
					
					var hybridInlineResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
					hybridInlineResource.setType(inlineResourceKeys[i]);
					hybridInlineResource.setValue(inlineResource);
					
					alert("inline: " + inlineResourceKeys[i] + ", " + inlineResource);
					hybridSyncRequestInlineResources.addValue(hybridInlineResource);
				}
			}


			hybridSyncRequest.addData(hybridSyncRequestInlineResources);
			hybridSiminovDatas.addHybridSiminovData(hybridSyncRequest);
									
			
			var data = SIJsonHelper.toJson(hybridSiminovDatas);
			alert("data: " + data);
						
			adapter.addParameter(encodeURI(data));
			adapter.invoke();
		}		
	}

		
}) ();


