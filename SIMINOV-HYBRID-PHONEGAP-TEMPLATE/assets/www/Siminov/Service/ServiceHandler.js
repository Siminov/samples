

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
			

			var hybridServiceDatas = new HybridSiminovDatas();

			var hybridService = new HybridSiminovDatas.HybridSiminovData();
				hybridService.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE);

				
				var hybridServiceName = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridServiceName.setType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_NAME);
				hybridServiceName.setValue(iService.getService());
			
			hybridService.addValue(hybridServiceName)
			
				var hybridServiceValue = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
				hybridServiceValue.setType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_API);	
				hybridServiceValue.setValue(iService.getApi());

			hybridService.addValue(hybridServiceValue);


				var resources = iService.getResources();
				if(resources != undefined && resources != null && resources.length > 0) {
					
					var hybridResources = new HybridSiminovDatas.HybridSiminovData();
						hybridResources.setDataType(Constants.SIMINOV_SERVICE_ADAPTER_INVOKE_HANDLER_SERVICE_RESOURCES);
					
					for(var i = 0;i < resources.length;i++) {
						var resource = resources[i];
						
						var resourceName = resource.getName();
						var resourceValue = resource.getValue();
						resourceValue = '' + resourceValue;
						
						var hybridResource = new HybridSiminovDatas.HybridSiminovData.HybridSiminovValue();
						hybridResource.setType(resourceName);
						hybridResource.setValue(resourceValue);
						
						hybridResources.addValue(hybridResource);
					}				
		
					hybridService.addData(hybridResources);	
				}


			hybridServiceDatas.addHybridSiminovData(hybridService)
			
			var data = encodeURI(SIJsonHelper.toJson(hybridServiceDatas));
			adapter.addParameter(data);

			adapter.invoke();
		}
	}
		
}) ();


