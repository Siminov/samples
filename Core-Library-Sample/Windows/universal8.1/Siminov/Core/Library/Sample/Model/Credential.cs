///
/// [SIMINOV FRAMEWORK]
/// Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.



using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Siminov.Core.Database;


namespace Siminov.Core.Library.Sample.Model
{
    public class Credential : Database.Database
    {

        //Table Name.
        public static readonly String TABLE_NAME = "CONNECT-CREDENTIAL";

        //Column Names.
        public static readonly String ACCOUNT_ID = "ACCOUNT_ID";
        public static readonly String CREDENTIAL_TYPE = "CREDENTIAL_TYPE";
        public static readonly String TOKEN = "TOKEN";
        public static readonly String LOGGED = "LOGGED";

        //Credential Types.
        public static readonly String CREDENTIAL_TYPE_SIMINOV = "SIMINOV";

        //Class Variables.

        private String accountId = null;
        private String credentialType = null;
        private String token = null;
        private String logged = null;

        public String GetAccountId()
        {
            return this.accountId;
        }

        public void SetAccountId(String accountId)
        {
            this.accountId = accountId;
        }

        public String GetCredentialType()
        {
            return this.credentialType;
        }

        public void SetCredentialType(String credentialType)
        {
            this.credentialType = credentialType;
        }

        public String GetToken()
        {
            return this.token;
        }

        public void SetToken(String token)
        {
            this.token = token;
        }

        public String GetLogged()
        {
            return this.logged;
        }

        public void SetLogged(String logged)
        {
            this.logged = logged;
        }

        public bool IsLogged()
        {
            String logged = GetLogged();
            if (logged == null || logged.Length <= 0)
            {
                return false;
            }

            if (logged.Equals("true", StringComparison.OrdinalIgnoreCase))
            {
                return true;
            }

            return false;
        }
    }
}
