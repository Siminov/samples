package siminov.connect.template.services;

import java.util.Iterator;

import siminov.connect.design.connection.IConnectionRequest;
import siminov.connect.design.connection.IConnectionResponse;
import siminov.connect.exception.ServiceException;
import siminov.connect.service.Service;
import siminov.connect.template.fragments.LiquorDetail;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.model.LiquorBrand;
import siminov.connect.template.reader.LiquorBrandsReader;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import android.support.v4.app.Fragment;

public class GetLiquorBrands extends Service {

	public static final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUOR-BRANDS";
	public static final String API_NAME = "GET-LIQUOR-BRANDS";
	
	public static final String LIQUOR_NAME = "LIQUOR-NAME";
	public static final String LIQUOR = "LIQUOR";
	
	private Liquor liquor = null;
	private Fragment fragment = null;
	
	
	public GetLiquorBrands() {
		setService(SERVICE_NAME);
		setApi(API_NAME);
	}

	public Fragment getComponent() {
		return this.fragment;
	}
	
	public void setComponent(Fragment fragment) {
		this.fragment = fragment;
	}
	
	public Liquor getLiquor() {
		return this.liquor;
	}
	
	public void setLiquor(Liquor liquor) {
		this.liquor = liquor;
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
		
		LiquorBrandsReader liquorBrandsReader = new LiquorBrandsReader(connectionResponse.getResponse());
		Iterator<LiquorBrand> liquorBrands = liquorBrandsReader.getLiquorBrands();
		
		while(liquorBrands.hasNext()) {
			LiquorBrand liquorBrand = liquorBrands.next();
			liquorBrand.setLiquor(liquor);
			
			try {
				liquorBrand.saveOrUpdate();
			} catch(DatabaseException de) {
				Log.loge(GetLiquors.class.getName(), "onServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}
		
		((LiquorDetail) fragment).refresh();
	}

	public void onServiceTerminate(ServiceException serviceException) {
		
	}
}