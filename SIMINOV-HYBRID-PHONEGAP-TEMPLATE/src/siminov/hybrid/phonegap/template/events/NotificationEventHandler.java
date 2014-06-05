package siminov.hybrid.phonegap.template.events;

import siminov.connect.events.INotificationEvents;
import siminov.connect.exception.NotificationException;
import siminov.connect.notification.design.IMessage;
import siminov.connect.notification.design.IRegistration;

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

	public void onError(NotificationException notificationException) {
		System.out.print("");
	}
}
