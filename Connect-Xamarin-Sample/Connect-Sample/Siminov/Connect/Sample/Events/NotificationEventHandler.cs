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



using Siminov.Connect.Events;
using Siminov.Connect.Exception;
using Siminov.Connect.Notification.Design;
using Siminov.Connect.Service.Design;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample.Events
{
	public class NotificationEventHandler : INotificationEvents
	{
		public void OnRegistration(IRegistration registration)
		{

			//IService service = new RegisterDevice();
			//service.addResource(RegisterDevice.REGISTRATION_ID, registration.getRegistrationId());

			//service.invoke();
		}

		public void OnUnregistration(IRegistration registration)
		{

			//IService service = new UnregisterDevice();
			//service.invoke();
		}

		public void OnNotification(IMessage message)
		{

		}

		public void OnError(NotificationException notificationException)
		{

		}
	}
}
