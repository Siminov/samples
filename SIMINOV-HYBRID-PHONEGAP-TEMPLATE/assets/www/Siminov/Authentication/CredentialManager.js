
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
		
		this.isAnyActiveAccount = function() {
			
	        var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENICATION_ADAPTER_IS_ANY_ACTIVE_ACCOUNT_HANDLER);
	
	        var data = adapter.invoke();
	
		    var hybridData = SIJsonHelper.toSI(data);
		    if(hybridData != undefined) {
		        var datas = hybridData.getHybridSiminovDatas();
		        if(datas != undefined) {
		            for(var i = 0;i < datas.length;i++) {
		                if(datas[i] != undefined) {
		                    var type = datas[i].getDataType();
		                	
		                	if(type != undefined && type != null) {
								var exception = SIJsonHelper.toModel(datas[i]);
		                		if(exception != undefined && exception != null) {
		                    		throw exception;	
		                		}                	
		                	} else {
			                    return datas[i].getDataValue();
		                	}
		                }
		            }
		        }
		    }
		
		    return false;
		}

		this.getActiveAccount = function() {

			var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENICATION_ADAPTER_GET_ACTIVE_ACCOUNT_HANDLER);
	
	        var data = adapter.invoke();
	
	        var datas = SIJsonHelper.toSI(data);
	        var databaseDescriptors = SIDatasHelper.toModels(datas);
			if(databaseDescriptors == undefined && databaseDescriptors == null && databaseDescriptors.length > 0) {
				return databaseDescriptors[0];
			}
	
	        return databaseDescriptors[0];			
		}	
		
		this.getAccounts = function() {
			
			var adapter = new Adapter();
	        adapter.setAdapterName(Constants.SIMINOV_AUTHENTICATION_ADAPTER);
	        adapter.setHandlerName(Constants.SIMINOV_AUTHENTICATION_ADAPTER_GET_ACCOUNT_HANDLER);
	
	        var data = adapter.invoke();
	
	        var datas = SIJsonHelper.toSI(data);
	        var databaseDescriptors = SIDatasHelper.toModels(datas);
	
	        return databaseDescriptors;			
		}	
	}

}) ();
