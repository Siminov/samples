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



using connect_sample;
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
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Siminov.Connect.Sample.Services
{
    public class GetLessions : Service.Service
    {
        public static readonly String SERVICE_NAME = "SIMINOV-CONNECT-LESSIONS-SERVICE";
        public static readonly String REQUEST_NAME = "GET-LESSIONS";

        public static readonly String BOOK_TITLE = "BOOK-TITLE";
        public static readonly String BOOK = "BOOK";
        public static readonly String UI_COMPONENT = "UI_COMPONENT";

        public GetLessions()
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

            if (connectionResponse.GetResponse() == null)
            {
                return;
            }


            Book book = (Book)GetResource(BOOK);
            Detail uiComponent = (Detail)GetResource(UI_COMPONENT);

            LessionsReader lessionsReader = new LessionsReader(connectionResponse.GetResponse());
            IEnumerator<Lession> lessions = lessionsReader.GetLessions();

            while (lessions.MoveNext())
            {
                Lession lession = lessions.Current;
                lession.SetBook(book);

                try
                {
                    lession.SaveOrUpdate();
                }
                catch (DatabaseException de)
                {
                    Log.Error(typeof(GetLessions).Name, "OnServiceApiFinish", "Database Exception caught while saving lessions in database, " + de.GetMessage());
                }
            }

            var dispatcher = CoreApplication.MainView.CoreWindow.Dispatcher;
            CoreApplication.MainView.CoreWindow.Dispatcher.RunAsync(
            CoreDispatcherPriority.Normal,
            () =>
            {
                ((Detail)uiComponent).Refresh();
            });
        }

        public override void OnTerminate(ServiceException serviceException)
        {

        }

    }
}
