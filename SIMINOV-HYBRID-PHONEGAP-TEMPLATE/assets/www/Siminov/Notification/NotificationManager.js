

var NotificationManager = (function() {

	var notificationManager;
	
	return {
	
		getInstance : function() {
			if(notificationManager == null) {
				notificationManager = new NotificationManager();
				
				notificationManager.constructor = null;
			}
			
			return notificationManager;
		}
	
	}
	

	function NotificationManager() {
		
		this.doRegistration = function() {
			alert("doRegistration");	
		    var adapter = new Adapter();
		    adapter.setAdapterName(Constants.SIMINOV_NOTIFICATION_ADAPTER);
		    adapter.setHandlerName(Constants.SIMINOV_NOTIFICATION_ADAPTER_DO_REGISTRATION_HANDLER);
		
			adapter.invoke();				
		}
			
		this.doUnregistration = function() {
			alert("doUnregistration");
		    var adapter = new Adapter();
		    adapter.setAdapterName(Constants.SIMINOV_NOTIFICATION_ADAPTER);
		    adapter.setHandlerName(Constants.SIMINOV_NOTIFICATION_ADPATER_DO_UNREGISTRATION_HANDLER);
		
			adapter.invoke();				
		}
	}

		
}) ();


