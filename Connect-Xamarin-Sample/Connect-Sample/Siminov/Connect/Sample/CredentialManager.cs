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



using Siminov.Connect.Sample.Model;
using Siminov.Core.Exception;
using Siminov.Core.Log;
using Siminov.Core.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample
{
	public class CredentialManager
	{
		private static CredentialManager credentialManager = null;

		private Credential activeCredential = null;

		private CredentialManager() 
		{

		}

		public static CredentialManager GetInstance() 
		{

			if(credentialManager == null) 
			{
				credentialManager = new CredentialManager();
			}

			return credentialManager;
		}


		public bool IsAnyActiveCredential() 
		{

			Credential credential = (Credential) ClassUtils.CreateClassInstance(typeof(Credential).FullName);
			if(credential == null) 
			{
				Log.Error(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			}


			int activeAccountCount = 0;

			try 
			{
				activeAccountCount = credential.Count().Where(Credential.ACTIVE).EqualTo(true).Execute();
			} 
			catch(SiminovException se) 
			{
				Log.Error(typeof(CredentialManager).Name, "IsAnyActiveCredential", "SiminovException caught while getting active account count, " + se.GetMessage());
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "IsAnyActiveCredential", "SiminovException caught while getting active account count, " + se.GetMessage());
			}


			if(activeAccountCount <= 0) 
			{
				return false;
			} 
			else 
			{
				return true;
			}
		}

		public Credential GetActiveCredential() 
		{

			Credential credential = (Credential) ClassUtils.CreateClassInstance(typeof(Credential).Name);
			if(credential == null) 
			{
				Log.Error(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			}


			if(activeCredential != null) 
			{
				return activeCredential;
			}


			Credential[] credentials = null;
			try 
			{
				credentials = (Credential[]) credential.Select().
					Where(Credential.ACTIVE).EqualTo(true).
					Execute();
			} 
			catch(SiminovException se) 
			{
				Log.Error(typeof(CredentialManager).Name, "GetActiveCredential", "SiminovException caught while getting active account, " + se.GetMessage());
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "GetActiveCredential", "SiminovException caught while getting active account, " + se.GetMessage());
			}

			if(credentials == null || credentials.Length <= 0) 
			{
				Log.Error(typeof(CredentialManager).Name, "GetActiveCredential", "No Account Found.");
				return null;
			}


			if(credentials.Length > 1) 
			{
				Log.Error(typeof(CredentialManager).Name, "GetActiveCredential", "More Then One Active Account Found.");
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "GetActiveCredential", "More Then One Active Account Found.");
			}


			activeCredential = credentials[0];
			return activeCredential;
		}

		public IEnumerator<Credential> GetCredentials() 
		{

			Credential credential = (Credential) ClassUtils.CreateClassInstance(typeof(Credential).Name);
			if(credential == null) 
			{
				Log.Error(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "IsAnyActiveCredential", "NO USER DEFINED CREDENTIAL.");
			}


			Credential[] credentials = null;
			try 
			{
				credentials = (Credential[]) credential.Select().
					Where(Credential.ACTIVE).EqualTo(true).
					Execute();
			} 
			catch(SiminovException se) 
			{
				Log.Error(typeof(CredentialManager).Name, "GetCredentials", "SiminovException caught while getting active account, " + se.GetMessage());
				throw new SiminovCriticalException(typeof(CredentialManager).Name, "GetCredentials", "SiminovException caught while getting active account, " + se.GetMessage());
			}

			if(credentials == null || credentials.Length <= 0) 
			{
				Log.Debug(typeof(CredentialManager).Name, "GetCredentials", "No Account Found.");
				return new List<Credential>().GetEnumerator();
			}


			ICollection<Credential> accounts = new List<Credential>();
			for(int i = 0;i < credentials.Length;i++) 
			{
				accounts.Add(credentials[i]);
			}

			return accounts.GetEnumerator();
		}

		public void SetActiveCredential(Credential credential) 
		{

		}

	}
}
