

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

			var resourcesHybrid = new HybridSiminovDatas.HybridSiminovData();
			resourcesHybrid.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_RESOURCES);			

			var resources = iService.getResources();
			for(var i = 0;i < resources.length;i++) {
				
				var resourceKey = resources[i];
				var resourceValue = iService.getResource(resourceKey);

				var resourceHybrid = new HybridSiminovDatas.HybridSiminovData();
				resourceHybrid.setDataType(resourceKey);
				resourceHybrid.setDataValue(resourceValue);
				
				resourcesHybrid.addData(resourceHybrid);
			}

			
			hybridSiminovDatas.addHybridSiminovData(serviceHybrid);
			hybridSiminovDatas.addHybridSiminovData(apiHybrid);

			hybridSiminovDatas.addHybridSiminovData(resourcesHybrid);


			var data = SIJsonHelper.toJson(hybridSiminovDatas);
			
			adapter.addParameter(encodeURI(data));
			adapter.invoke();
		}
	}
		
}) ();
