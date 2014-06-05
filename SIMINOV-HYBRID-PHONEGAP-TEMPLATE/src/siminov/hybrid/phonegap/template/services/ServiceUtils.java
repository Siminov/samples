package siminov.hybrid.phonegap.template.services;

import java.sql.Connection;

import oauth.signpost.OAuthConsumer;
import oauth.signpost.commonshttp.CommonsHttpOAuthConsumer;

import org.apache.http.client.methods.HttpGet;

import siminov.connect.Constants;
import siminov.connect.authorization.CredentialManager;
import siminov.connect.authorization.design.ICredential;
import siminov.connect.authorization.oauth.OauthConstants;
import siminov.orm.exception.SiminovException;
import siminov.orm.log.Log;

public class ServiceUtils {

	public String getCompanyAlias() {

		ICredential credential = CredentialManager.getInstance().getActiveCredential();
		if(credential == null) {
			Log.error(ServiceUtils.class.getName(), "getUrl", "Invalid Credential Found.");
			return "";
		}

		return credential.getAccountId();
	}
	
	public String getOAuthAuthorization(final String protocol, final String instance, final String context, final String api) throws SiminovException {
		
    	ICredential credential = CredentialManager.getInstance().getActiveCredential();
    	if(credential == null) {
    		Log.error(Connection.class.getName(), "sign", "Invalid Credential Found.");
    		throw new SiminovException(Connection.class.getName(), "sign", "Invalid Credential Found.");
    	}
    	
    	String consumerKey = OauthConstants.CONSUMER_KEY;
    	String consumerSecret = OauthConstants.CONSUMER_SECRET;
    	
    	if(consumerKey == null || consumerKey.length() <= 0) {
    		Log.error(Connection.class.getName(), "sign", "Inavlid ConsumerKey Found.");
    		throw new SiminovException(Connection.class.getName(), "sign", "Inavlid ConsumerKey Found.");
    	} else if(consumerSecret == null || consumerSecret.length() <= 0) {
    		Log.error(Connection.class.getName(), "sign", "Inavlid ConsumerSecret Found.");
    		throw new SiminovException(Connection.class.getName(), "sign", "Inavlid ConsumerSecret Found.");
    	}
    	
    	OAuthConsumer consumer = new CommonsHttpOAuthConsumer(consumerKey, consumerSecret);
    	consumer.setTokenWithSecret(credential.getToken().substring(0, credential.getToken().indexOf(":")), credential.getToken().substring(credential.getToken().indexOf(":") + 1, credential.getToken().length()));

		StringBuilder url = new StringBuilder();
		if(protocol != null) {

			if(protocol.equalsIgnoreCase(Constants.SERVICE_DESCRIPTOR_HTTP_PROTOCOL)) {
				url.append(Constants.CONNECTION_HTTP);
			} else if(protocol.equalsIgnoreCase(Constants.SERVICE_DESCRIPTOR_HTTPS_PROTOCOL)) {
				url.append(Constants.CONNECTION_HTTPS);
			}

			url.append("://");
		}
			
		url.append(instance);

		if(context != null && context.length() > 0) {
			url.append("/" + context);
		}
		
		if(api != null && api.length() > 0) {
			url.append("/" + api);
		}
    	
		oauth.signpost.http.HttpRequest signature;
		org.apache.http.HttpRequest httpRequest = new HttpGet(url.toString());
    	try {
    		signature = consumer.sign(httpRequest);    		
    	} catch(Exception exception) {
    		Log.error(Connection.class.getName(), "sign", "Exception caught while signing request url, " + exception.getMessage());
    		throw new SiminovException(Connection.class.getName(), "sign", "Exception caught while signing request url, " + exception.getMessage());
    	}

    	
    	String authorization = signature.getHeader("Authorization");
    	return authorization;
	}
}
