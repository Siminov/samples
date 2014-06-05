package siminov.connect.template.events;

import siminov.connect.events.INotificationEvents;
import siminov.connect.exception.NotificationException;
import siminov.connect.notification.design.IMessage;
import siminov.connect.notification.design.IRegistration;
import siminov.connect.service.NameValuePair;
import siminov.connect.service.design.IService;
import siminov.connect.template.services.RegisterDevice;
import siminov.connect.template.services.UnregisterDevice;

public class NotificationEventHandler implements INotificationEvents {

	public void onRegistration(IRegistration registration) {
		
		IService service = new RegisterDevice();
		service.addResource(new NameValuePair(RegisterDevice.REGISTRATION_ID, registration.getRegistrationId()));
		
		service.invoke();
	}

	public void onUnregistration(IRegistration registration) {

		IService service = new UnregisterDevice();
		service.invoke();
	}

	public void onNotification(IMessage message) {
		
	}

	public void onError(NotificationException notificationException) {
		
	}
}
