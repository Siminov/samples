package siminov.connect.template.services;

import siminov.connect.design.connection.IConnectionRequest;
import siminov.connect.design.connection.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;

public class UnregisterDevice extends Service {

	private static final String SERVICE_NAME = "SIMINOV-CONNECT-NOTIFICATION-SERVICE";
	private static final String API_NAME = "UNREGISTER-DEVICE";
	
	public UnregisterDevice() {
		setService(SERVICE_NAME);
		setApi(API_NAME);
	}
	
	public void onServiceStart() {

	}

	public void onServiceQueue() {
		
	}

	public void onServicePause() {
		
	}

	public void onServiceResume() {
		
	}

	public void onServiceFinish() {
		
	}

	public void onServiceApiInvoke(IConnectionRequest connectionRequest) {
		
	}

	public void onServiceApiFinish(IConnectionResponse connectionResponse) {
		
	}

	public void onServiceTerminate(ServiceException serviceException) {
		
	}
}
