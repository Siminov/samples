package siminov.connect.template.services;

import siminov.connect.connection.design.IConnectionRequest;
import siminov.connect.connection.design.IConnectionResponse;
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
	
	public void onStart() {

	}

	public void onQueue() {
		
	}

	public void onPause() {
		
	}

	public void onResume() {
		
	}

	public void onFinish() {
		
	}

	public void onApiInvoke(IConnectionRequest connectionRequest) {
		
	}

	public void onApiFinish(IConnectionResponse connectionResponse) {
		
	}

	public void onTerminate(ServiceException serviceException) {
		
	}

	public void onRestart() {

	}
}
