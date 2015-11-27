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
	public class GetLiquorBrands : Service.Service
	{
		public static readonly String SERVICE_NAME = "SIMINOV-CONNECT-LIQUOR-BRANDS-SERVICE";
		public static readonly String REQUEST_NAME = "GET-LIQUOR-BRANDS";

		public static readonly String LIQUOR_NAME = "LIQUOR-NAME";
		public static readonly String LIQUOR = "LIQUOR";
		public static readonly String UI_COMPONENT = "UI_COMPONENT";

		public GetLiquorBrands() 
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

			if(connectionResponse.GetResponse() == null) 
			{
				return;
			}


			Liquor liquor = (Liquor) GetResource(LIQUOR);
			Detail uiComponent = (Detail) GetResource(UI_COMPONENT);

			LiquorBrandsReader liquorBrandsReader = new LiquorBrandsReader(connectionResponse.GetResponse());
			IEnumerator<LiquorBrand> liquorBrands = liquorBrandsReader.GetLiquorBrands();

			while(liquorBrands.MoveNext()) 
			{
				LiquorBrand liquorBrand = liquorBrands.Current;
				liquorBrand.SetLiquor(liquor);

				try 
				{
					liquorBrand.SaveOrUpdate();
				} 
				catch(DatabaseException de) 
				{
					Log.Error(typeof(GetLiquors).Name, "OnServiceApiFinish", "Database Exception caught while saving liquor brands in database, " + de.GetMessage());
				}
			}

			uiComponent.Refresh ();

		}

		public override void OnTerminate(ServiceException serviceException) 
		{

		}

	}
}
