

var CredentialManager = (function() {

	var credentialManager;
	
	return {
	
		getInstance : function() {

			if(credentialManager == null) {
				credentialManager = new CredentialManager();
				
				credentialManager.constructor = null;
			}
			
			return credentialManager;
		}
	}
	

	function CredentialManager() {
	
		this.isAnyActiveCredential = function() {

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER_IS_ANY_ACTIVE_CREDENTIAL_HANDLER);

		    var data = adapter.invoke();
		    var siDatas = SIJsonHelper.toSI(data);
		    
		    var datas = siDatas.getHybridSiminovDatas();
		    for(var i = 0;i < datas.length;i++) {
		
		        var data = datas[i];
				return data.getDataValue();
		    }
		    
		    return 0;
		}
	
		this.getActiveCredential = function() {

	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER_GET_ACTIVE_CREDENTIAL_HANDLER);

		    var data = adapter.invoke();
		    var siDatas = SIJsonHelper.toSI(data);
		    
		    var models = SIDatasHelper.toModels(siDatas);
			if(models != undefined && models != null && models.length > 0) {
				for(var i = 0;i < models.length;i++) {
					var model = models[i];
					
					if(model instanceof SiminovException) {
						throw model;
					}
				}
			} else {
				return undefined;
			}
		
		    return models[0];
		}
	
		this.getCredentials = function() {
	
	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_CREDENTIAL_MANAGER_ADAPTER_GET_CREDENTIALS_HANDLER);

		    var data = adapter.invoke();
		    var siDatas = SIJsonHelper.toSI(data);
		    
		    var models = SIDatasHelper.toModels(siDatas);
			if(models != undefined && models != null && models.length > 0) {
				for(var i = 0;i < models.length;i++) {
					var model = models[i];
					
					if(model instanceof SiminovException) {
						throw model;
					}
				}
			}
		
		    return models;
		}
	
		this.setActiveCredential = function(credential) {
			
		}
	}
		
}) ();
