
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using Android.App;
using Android.Content;
using Android.OS;
using Android.Runtime;
using Android.Views;
using Android.Widget;

using Java.Util;

using Siminov.Core.Sample.Model;

namespace CoreSample.Droid
{
	[Activity (Label = "Home")]			
	public class Home : ListActivity
	{
		public static Liquor liquor;
		private static Liquor[] liquors;

		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			//SetContentView (Resource.Layout.Home);

			ICollection items = new LinkedList  ();
			liquors = (Liquor[])new Liquor().Select().Execute();

			for (int i = 0; i < liquors.Length; i++)
			{
				items.Add (liquors[i].GetLiquorType());
			}

			//string[] items = new string[] { "Vegetables","Fruits","Flower Buds","Legumes","Bulbs","Tubers" };
			Object[] itms = items.ToArray();
			ListAdapter = new ArrayAdapter<Object>(this, Android.Resource.Layout.SimpleListItem1, itms);

			ListView.ItemClick += (object sender, Android.Widget.AdapterView.ItemClickEventArgs e) => {
				Object item = ListView.GetItemAtPosition (e.Position);
				String type = item.ToString();

				for(int i = 0;i < liquors.Length;i++) 
				{
					if(liquors[i].GetLiquorType().Equals(type, StringComparison.OrdinalIgnoreCase)) 
					{
						liquor = liquors[i];
						break;
					}
				}	

				StartActivity(typeof(Detail));
			};
				
		}
	}
}

