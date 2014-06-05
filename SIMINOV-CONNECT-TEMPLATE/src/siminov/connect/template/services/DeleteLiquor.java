package siminov.connect.template.services;

import siminov.connect.connection.design.IConnectionRequest;
import siminov.connect.connection.design.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;

public class DeleteLiquor extends Service {

	private static final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS-SERVICE";
	private static final String API_NAME = "DELETE-LIQUOR";
	
	public static final String LIQUOR_NAME = "LIQUOR_NAME";
	
	public DeleteLiquor() {
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
