

var ServiceHandler = (function() {

	var serviceHandler;
	
	return {
	
		getInstance : function() {
			if(serviceHandler == null) {
				serviceHandler = new ServiceHandler();
				
				serviceHandler.constructor = null;
			}
			
			return serviceHandler;
		}
	
	}
	

	function ServiceHandler() {
		
		
		this.handle = function(iService) {

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_SERVICE_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER);
			
			var hybridSiminovDatas = new HybridSiminovDatas();
				
			var serviceHybrid = new HybridSiminovDatas.HybridSiminovData();
			serviceHybrid.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_PARAMETER);
			serviceHybrid.setDataValue(iService.getService());
			
			var apiHybrid = new HybridSiminovDatas.HybridSiminovData();
			apiHybrid.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_API_PARAMETER);
			apiHybrid.setDataValue(iService.getApi());

			var inlineResourcesHybrid = new HybridSiminovDatas.HybridSiminovData();
			inlineResourcesHybrid.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_INLINE_RESOURCES);			

			var inlineResources = iService.getInlineResources();
			for(var i = 0;i < inlineResources.length;i++) {
				
				var inlineResourceKey = inlineResources[i];
				var inlineResourceValue = iService.getInlineResource(inlineResourceKey);

				var inlineResourceHybrid = new HybridSiminovDatas.HybridSiminovData();
				inlineResourceHybrid.setDataType(inlineResourceKey);
				inlineResourceHybrid.setDataValue(inlineResourceValue);
				
				inlineResourcesHybrid.addData(inlineResourceHybrid);
			}

			
			hybridSiminovDatas.addHybridSiminovData(serviceHybrid);
			hybridSiminovDatas.addHybridSiminovData(apiHybrid);

			hybridSiminovDatas.addHybridSiminovData(inlineResourcesHybrid);


			var data = SIJsonHelper.toJson(hybridSiminovDatas);
			
			adapter.addParameter(encodeURI(data));
			adapter.invoke();
		}
	}
		
}) ();
