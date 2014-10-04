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
import siminov.connect.template.fragments.Home;
import siminov.connect.template.model.Liquor;
import siminov.connect.template.reader.LiquorsReader;
import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import android.support.v4.app.Fragment;

public class GetLiquors extends Service {

	public static final String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS-SERVICE";
	public static final String REQUEST_NAME = "GET-LIQUORS";
	
	public static final String UI_COMPONENT = "UI_COMPONENT";
	
	public GetLiquors() {
		setService(SERVICE_NAME);
		setRequest(REQUEST_NAME);
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

	public void onRequestInvoke(IConnectionRequest connectionRequest) {
		
	}

	public void onRequestFinish(IConnectionResponse connectionResponse) {
		
		Fragment uiComponent = (Fragment) getResource(UI_COMPONENT);
		
		LiquorsReader liquorsReader = new LiquorsReader(connectionResponse.getResponse());
		Iterator<Liquor> liquors = liquorsReader.getLiquors();
		
		while(liquors.hasNext()) {
			Liquor liquor = liquors.next();
			
			try {
				liquor.saveOrUpdate();
			} catch(DatabaseException de) {
				Log.error(GetLiquors.class.getName(), "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.getMessage());
			}
		}
		
		((Home) uiComponent).refresh();
	}

	public void onTerminate(ServiceException serviceException) {
		
	}
}
