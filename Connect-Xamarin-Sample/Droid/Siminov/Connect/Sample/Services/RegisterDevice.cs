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



using Siminov.Connect.Connection.Design;
using Siminov.Connect.Exception;
using Siminov.Connect.Service;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample.Services
{
	public class RegisterDevice : Service.Service
	{
		private static readonly String SERVICE_NAME = "SIMINOV-CONNECT-NOTIFICATION-SERVICE";
		private static readonly String REQUEST_NAME = "REGISTER-DEVICE";

		public static readonly String REGISTRATION_ID = "ID";

		public RegisterDevice() 
		{
			SetService(SERVICE_NAME);
			SetRequest(REQUEST_NAME);
		}

		public override void OnStart() 
		{

		}

		public override void OnQueue() 
		{

		}

		public override void OnPause() 
		{

		}

		public override void OnResume() 
		{

		}

		public override void OnFinish() 
		{

		}

		public override void OnRequestInvoke(IConnectionRequest connectionRequest) 
		{

		}

		public override void OnRequestFinish(IConnectionResponse connectionResponse) 
		{

		}

		public override void OnTerminate(ServiceException serviceException) 
		{

		}

	}
}
