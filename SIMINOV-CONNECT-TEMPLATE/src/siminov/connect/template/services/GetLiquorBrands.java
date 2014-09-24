/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

package siminov.connect.template.services;

import java.util.Iterator;

import siminov.connect.connection.design.IConnectionRequest;
import siminov.connect.connection.design.IConnectionResponse;
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

	public static final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUOR-BRANDS-SERVICE";
	public static final String API_NAME = "GET-LIQUOR-BRANDS";
	
	public static final String LIQUOR_NAME = "LIQUOR-NAME";
	public static final String LIQUOR = "LIQUOR";
	public static final String UI_COMPONENT = "UI_COMPONENT";
	
	public GetLiquorBrands() {
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
	
		if(connectionResponse.getResponse() == null) {
			return;
		}
		
		
		Liquor liquor = (Liquor) getResource(LIQUOR);
		Fragment uiComponent = (Fragment) getResource(UI_COMPONENT);
		
		LiquorBrandsReader liquorBrandsReader = new LiquorBrandsReader(connectionResponse.getResponse());
		Iterator<LiquorBrand> liquorBrands = liquorBrandsReader.getLiquorBrands();
		
		while(liquorBrands.hasNext()) {
			LiquorBrand liquorBrand = liquorBrands.next();
			liquorBrand.setLiquor(liquor);
			
			try {
				liquorBrand.saveOrUpdate();
			} catch(DatabaseException de) {
				Log.error(GetLiquors.class.getName(), "onServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
			}
		}
		
		((LiquorDetail) uiComponent).refresh();
	}

	public void onTerminate(ServiceException serviceException) {
		
	}

	public void onRestart() {
		
	}
}
