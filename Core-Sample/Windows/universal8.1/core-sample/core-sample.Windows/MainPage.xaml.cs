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

namespace core_sample
{
    using Siminov;
    using Siminov.Core.Library.Sample.APIS;


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
            CredentialAPI credentialAPI = new CredentialAPI();

            Button btn = (Button)sender;

            String name = userName.Text;
            String password = token.Text;

            if (credentialAPI.IsAccountPresent())
            {
                bool authenticate = credentialAPI.AuthenticateCredential(name, password);
                if (!authenticate)
                {
                    return;
                }
            }
            else
            {
                credentialAPI.CreateAccount(name, password);
            }

            Frame.Navigate(typeof(Home));
        }
    }
}
