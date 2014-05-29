package siminov.connect.template.services;

import siminov.connect.design.connection.IConnectionRequest;
import siminov.connect.design.connection.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.writter.LiquorWritter;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;

public class AddLiquor extends Service {

	private final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS-SERVICE";
	private final String API_NAME = "ADD-LIQUOR";

	public static final String LIQUOR = "LIQUOR";
	
	public AddLiquor() {
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
		
		if(connectionRequest.getDataStream() == null) {
			return;
		}
		
		
		String liquorType = (String) getResource(LIQUOR);
		Liquor liquor = null;
		
		try {
			Liquor[] liquors = new Liquor().select().where(Liquor.LIQUOR_TYPE).equalTo(liquorType).execute();
			if(liquors != null && liquors.length > 0) {
				liquor = liquors[0];
			}
		} catch(DatabaseException de) {
			Log.error(AddLiquor.class.getName(), "onServiceApiInvoke", "Database Exception caught while getting liquor from database, " + de.getMessage());
			return;
		}
		
		
		LiquorWritter liquorWritter = new LiquorWritter();
		byte[] dataStream = liquorWritter.build(liquor);
		
		connectionRequest.setDataStream(dataStream);
	}

	public void onServiceApiFinish(IConnectionResponse connectionResponse) {
		
	}

	public void onServiceTerminate(ServiceException serviceException) {
		
	}
}
