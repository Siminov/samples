using System;
		
using UIKit;

namespace CoreSample.iOS
{
	public partial class ViewController : UIViewController
	{
		
		public ViewController (IntPtr handle) : base (handle)
		{		
		}


		public override void ViewDidLoad ()
		{
			base.ViewDidLoad ();

			// Code to start the Xamarin Test Cloud Agent
			#if ENABLE_TEST_CLOUD
			Xamarin.Calabash.Start ();
			#endif
        }

		public override void DidReceiveMemoryWarning ()
		{		
			base.DidReceiveMemoryWarning ();		
			// Release any cached data, images, etc that aren't in use.		
		}

		partial void login_TouchUpInside (UIButton sender)
		{
			Home home = this.Storyboard.InstantiateViewController ("Home") as Home;
			if (home != null) {
				this.NavigationController.PushViewController (home, true);
			}

			throw new NotImplementedException ();
		}
	}
}
