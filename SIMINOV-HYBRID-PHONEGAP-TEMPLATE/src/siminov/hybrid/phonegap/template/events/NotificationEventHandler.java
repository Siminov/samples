package siminov.hybrid.phonegap.template.events;

import siminov.connect.design.notification.IMessage;
import siminov.connect.design.notification.IRegistration;
import siminov.connect.events.INotificationEvents;

public class NotificationEventHandler implements INotificationEvents {

	public void onRegistration(IRegistration registration) {
		System.out.print("");
	}

	public void onUnregistration(IRegistration registration) {
		System.out.print("");
	}

	public void onNotification(IMessage message) {
		System.out.print("");
	}
}
