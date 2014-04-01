package siminov.connect.template.services;

import java.util.Iterator;

import siminov.connect.design.connection.IConnectionRequest;
import siminov.connect.design.connection.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;
import siminov.connect.template.fragments.Home;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.reader.LiquorsReader;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import android.support.v4.app.Fragment;

public class GetLiquors extends Service {

	public static final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS";
	public static final String API_NAME = "GET-LIQUORS";
	
	private Fragment fragment = null;
	
	public GetLiquors() {
		setService(SERVICE_NAME);
		setApi(API_NAME);
	}
	
	public Fragment getComponent() {
		return this.fragment;
	}
	
	public void setComponent(Fragment fragment) {
		this.fragment = fragment;
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
		
		LiquorsReader liquorsReader = new LiquorsReader(connectionResponse.getResponse());
		Iterator<Liquor> liquors = liquorsReader.getLiquors();
		
		while(liquors.hasNext()) {
			Liquor liquor = liquors.next();
			
			try {
				liquor.saveOrUpdate();
			} catch(DatabaseException de) {
				Log.loge(GetLiquors.class.getName(), "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
			}
		}
		
		((Home) fragment).refresh();
	}

	public void onServiceTerminate(ServiceException serviceException) {
		
	}
}
