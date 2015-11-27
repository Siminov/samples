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



using Siminov.Connect.Sample.Services;
using Siminov.Connect.Connection.Design;
using Siminov.Connect.Exception;
using Siminov.Connect.Sample.Model;
using Siminov.Connect.Sample.Reader;
using Siminov.Connect.Service;
using Siminov.Core.Exception;
using Siminov.Core.Log;
using System;
using System.Collections.Generic;
using System.Text;

using ConnectSample.Droid;

namespace Siminov.Connect.Sample.Services
{
	public class GetLiquors : Service.Service
	{
		public static readonly String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS-SERVICE";
		public static readonly String REQUEST_NAME = "GET-LIQUORS";

		public static readonly String UI_COMPONENT = "UI_COMPONENT";

		public GetLiquors() 
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

			Home uiComponent = (Home) GetResource(UI_COMPONENT);

			LiquorsReader liquorsReader = new LiquorsReader(connectionResponse.GetResponse());
			IEnumerator<Liquor> liquors = liquorsReader.GetLiquors();

			while(liquors.MoveNext()) 
			{
				Liquor liquor = liquors.Current;

				try 
				{
					liquor.SaveOrUpdate();
				} 
				catch(DatabaseException de) 
				{
					Log.Error(typeof(GetLiquors).Name, "onServiceApiFinish", "Database Exception caught while saving liquors in database, " + de.GetMessage());
				}
			}

			uiComponent.Refresh ();
		}

		public override void OnTerminate(ServiceException serviceException) 
		{

		}

	}
}
