using System;

using Android.App;
using Android.Content;
using Android.Runtime;
using Android.Views;
using Android.Widget;
using Android.OS;
using Siminov.Core;

using System.IO;
using Siminov.Core.Utils;
using Siminov.Core.Library.Sample.APIS;

namespace CoreSample.Droid
{
	[Activity (Label = "Core-Sample.Droid", MainLauncher = true, Icon = "@drawable/icon")]
	public class MainActivity : Activity
	{
		protected override void OnCreate (Bundle bundle)
		{
			

			base.OnCreate (bundle);

			// Set our view from the "main" layout resource
			SetContentView (Resource.Layout.Main);

			// Get our button from the layout resource,
			// and attach an event to it
			EditText usernameField = FindViewById<EditText> (Resource.Id.username);
			EditText passwordField = FindViewById<EditText> (Resource.Id.password);

			Button login = FindViewById<Button> (Resource.Id.login);
			Button initialize = FindViewById<Button> (Resource.Id.initialize);

			login.Click += delegate {

				CredentialAPI credentialAPI = new CredentialAPI();

				String name = usernameField.Text.ToString();
				String password = passwordField.Text.ToString();

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
			new Siminov.Core.Sample.Siminov ().Initialize ();
		}

		public static void SyncAssets(string assetFolder, string targetDir)
		{

			string[] assets = Application.Context.Assets.List("");

			foreach (string asset in assets) 
			{
				string[] subAssets = Application.Context.Assets.List (assetFolder + "/" + asset);

				// if it has a length, it's a folder
				if (subAssets.Length > 0)
				{
					SyncAssets(assetFolder + "/" + asset, targetDir);
				}
				else
				{
					// it's a file
					using (var source = Application.Context.Assets.Open(assetFolder + "/" + asset))
					{
						if (!System.IO.Directory.Exists(targetDir + assetFolder))
						{
							System.IO.Directory.CreateDirectory(targetDir + assetFolder);
						}

						using (var dest = System.IO.File.Create(targetDir + assetFolder + "/" + asset))
						{
							Console.WriteLine("Copying '" + assetFolder + "/" + asset + "' to '" + targetDir + assetFolder + "/" + asset + "'");
							source.CopyTo(dest);
						}
					}
				}

			}
		}
	}
}


