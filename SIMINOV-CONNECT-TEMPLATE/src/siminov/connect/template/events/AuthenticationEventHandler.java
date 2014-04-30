package siminov.connect.template.events;

import siminov.connect.design.authorization.ICredential;
import siminov.connect.events.IAuthenticationEvents;
import siminov.connect.exception.AuthorizationException;
import siminov.orm.resource.Resources;
import android.widget.Toast;

public class AuthenticationEventHandler implements IAuthenticationEvents {

	public void onAuthenticationStart(ICredential credential) throws AuthorizationException {
		
	}

	public void onAuthenticationFinish(ICredential credential) throws AuthorizationException {
		
       Toast.makeText(Resources.getInstance().getApplicationContext(), "Authentication Success", Toast.LENGTH_LONG);
	}

	public void onAuthenticationTerminate(ICredential credential) throws AuthorizationException {
		
	}
}
