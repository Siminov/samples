package siminov.hybrid.phonegap.template.events;

import siminov.hybrid.phonegap.template.authorization.Credential;
import siminov.orm.events.ISiminovEvents;
import siminov.orm.exception.DatabaseException;


public class SiminovEventHandler implements ISiminovEvents {

	public void onFirstTimeSiminovInitialized() {

		
		/*Credential credential = new Credential();
		credential.setAccountId("pranavchauhan001");
		credential.setToken("1ZqY6hQUBByC0Iak3Cjb5l8ts5vBLijshAWeNgBQ:40KwoQakQu4xouOb8GPjDWu4fHHna3adCnwlfB3K");
		credential.setActive(true);

		credential.addInlineResource("COMPANY_ALIAS", "pranavchauhan001");
		
		try {
			credential.saveOrUpdate();
		} catch(DatabaseException de) {
			//Log.loge(Siminov.class.getName(), "", "DatabaseException caught while saving or updating credential: " + de.getMessage());
		}*/
	}

	public void onSiminovInitialized() {
		
		/*Credential credential = new Credential();
		credential.setAccountId("pranavchauhan001");
		credential.setToken("1ZqY6hQUBByC0Iak3Cjb5l8ts5vBLijshAWeNgBQ:40KwoQakQu4xouOb8GPjDWu4fHHna3adCnwlfB3K");
		credential.setActive(true);

		credential.addInlineResource("COMPANY_ALIAS", "pranavchauhan001");
		
		try {
			credential.saveOrUpdate();
		} catch(DatabaseException de) {
			//Log.loge(Siminov.class.getName(), "", "DatabaseException caught while saving or updating credential: " + de.getMessage());
		}*/
	}

	public void onSiminovStopped() {
		
	}
}