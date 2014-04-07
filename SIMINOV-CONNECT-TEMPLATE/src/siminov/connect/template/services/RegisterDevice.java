package siminov.connect.template.services;

import siminov.connect.design.connection.IConnectionRequest;
import siminov.connect.design.connection.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;

public class RegisterDevice extends Service {

	private static final String SERVICE_NAME = "SIMINOV-CONNECT-NOTIFICATION-SERVICE";
	private static final String API_NAME = "REGISTER-DEVICE";
	
	public static final String REGISTRATION_ID = "ID";
	
	public RegisterDevice() {
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
