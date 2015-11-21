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



using Siminov.Core.Exception;
using Siminov.Core.Library.Sample.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Siminov.Core.Library.Sample.APIS
{
    public class CredentialAPI
    {

        public void CreateAccount(String accountId, String token)
        {

            Credential credential = new Credential();
            credential.SetCredentialType(Credential.CREDENTIAL_TYPE_SIMINOV);
            credential.SetAccountId(accountId);
            credential.SetToken(token);
            credential.SetLogged("true");

            credential.Save();
        }

        public bool AuthenticateCredential(String accountId, String token)
        {

            Credential[] credentials = (Credential[])new Credential().Select().Where(Credential.ACCOUNT_ID).EqualTo(accountId).Execute();

            if (credentials == null || credentials.Length <= 0)
            {
                Log.Log.Important(this.GetType().Name, "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
                throw new DatabaseException(this.GetType().Name, "authenticateCredential", "NO SUCH ACCOUNT ID PRESENT, ACCOUNT-ID: " + accountId);
            }

            return credentials[0].GetToken().Equals(token);
        }

        public bool IsAccountPresent()
        {
            try
            {
                int noOfCredentials = new Credential().Count().Execute();
                return noOfCredentials > 0 ? true : false;
            }
            catch (DatabaseException databaseException)
            {
                Log.Log.Error(this.GetType().Name, "IsAccountPresent", databaseException.GetMessage());
            }

            return false;
        }

    }
}
