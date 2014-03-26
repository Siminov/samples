

function NotificationManager() {
	
	this.doRegistration = function() {
		
        var adapter = new Adapter();
        adapter.setAdapterName(Constants.SIMINOV_NOTIFICATION_ADAPTER);
        adapter.setHandlerName(Constants.SIMINOV_NOTIFICATION_ADAPTER_DO_REGISTRATION_HANDLER);

		adapter.invoke();				
	}
		
	this.doUnregistration = function() {
		
        var adapter = new Adapter();
        adapter.setAdapterName(Constants.SIMINOV_NOTIFICATION_ADAPTER);
        adapter.setHandlerName(Constants.SIMINOV_NOTIFICATION_ADPATER_DO_UNREGISTRATION_HANDLER);

		adapter.invoke();				
	}
}