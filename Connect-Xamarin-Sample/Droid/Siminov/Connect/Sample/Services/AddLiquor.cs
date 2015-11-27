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
using Siminov.Connect.Sample.Model;
using Siminov.Connect.Sample.Writter;
using Siminov.Core.Exception;
using Siminov.Core.Log;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample.Services
{
	public class AddLiquor : Service.Service
	{
		private readonly String SERVICE_NAME = "SIMINOV-CONNECT-LIQUORS-SERVICE";
		private readonly String REQUEST_NAME = "ADD-LIQUOR";

		public static readonly String LIQUOR = "LIQUOR";

		public AddLiquor() 
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

			if(connectionRequest.GetDataStream() == null) 
			{
				return;
			}


			String liquorType = (String) GetResource(LIQUOR);
			Liquor liquor = null;

			try 
			{
				Liquor[] liquors = (Liquor[]) new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(liquorType).Execute();
				if(liquors != null && liquors.Length > 0) 
				{
					liquor = liquors[0];
				}
			} 
			catch(DatabaseException de) 
			{
				Log.Error(typeof(AddLiquor).Name, "onServiceApiInvoke", "Database Exception caught while getting liquor from database, " + de.GetMessage());
				return;
			}


			LiquorWritter liquorWritter = new LiquorWritter();
			byte[] dataStream = liquorWritter.Build(liquor);

			connectionRequest.SetDataStream(dataStream);
		}

		public override void OnRequestFinish(IConnectionResponse connectionResponse) 
		{

		}

		public override void OnTerminate(ServiceException serviceException) 
		{

		}

	}
}
