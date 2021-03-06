using System;
using Android.App;
using Android.Content;
using Android.Content.PM;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;

namespace ConnectSample.Droid
{
	[Activity (Label = "Core-Sample.Droid", MainLauncher = true, Icon = "@drawable/icon")]
	public class MainActivity : Activity
	{
		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			SetContentView (Resource.Layout.Main);

			// Get our button from the layout resource,
			// and attach an event to it
			EditText usernameField = FindViewById<EditText> (Resource.Id.username);
			EditText passwordField = FindViewById<EditText> (Resource.Id.password);

			Button login = FindViewById<Button> (Resource.Id.login);
			Button initialize = FindViewById<Button> (Resource.Id.initialize);

			login.Click += delegate {

				//CredentialAPI credentialAPI = new CredentialAPI();

				//String name = usernameField.Text.ToString();
				//String password = passwordField.Text.ToString();

				/*if (credentialAPI.IsAccountPresent())
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
				}*/

				StartActivity(typeof(Home));
			};

			initialize.Click += delegate {
				//SyncAssets("Assets", "Assets");
				Initialize();
			};
		}

		public void Initialize()
		{
			new Siminov.Connect.Sample.Siminov ().Initialize ();
		}

	}
}
