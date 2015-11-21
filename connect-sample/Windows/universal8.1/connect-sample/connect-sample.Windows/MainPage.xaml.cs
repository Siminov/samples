using Siminov.Connect.Sample;
using Siminov.Connect.Sample.Model;
using Siminov.Core.Exception;
using Siminov.Core.Log;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=234238

namespace connect_sample
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();
        }

        private void Login(object sender, RoutedEventArgs e)
        {
            CredentialManager credentialAPI = CredentialManager.GetInstance();

            Button btn = (Button)sender;

            String name = userName.Text;
            String password = token.Text;

            if (credentialAPI.IsAnyActiveCredential())
            {
                Credential credential = new Credential();
                credential.SetAccountId(name);
                credential.SetToken(password);
                credential.SetActive(true);

                try
                {
                    credential.SaveOrUpdate();
                }
                catch (DatabaseException databaseException)
                {
                    Log.Error(this.GetType().Name, "Login", "DatabaseException caught while creating account, " + databaseException.GetMessage());
                    return;
                }
            }

            Frame.Navigate(typeof(Home));
        }
    }
}
