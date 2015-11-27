
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
	[Activity (Label = "Detail")]			
	public class Detail : Activity
	{
		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			SetContentView (Resource.Layout.Detail);

			Liquor selectedLiquor = CoreSample.Droid.Home.liquor;

			TextView type = FindViewById<TextView> (Resource.Id.type);
			TextView description = FindViewById<TextView> (Resource.Id.description);
			TextView history = FindViewById<TextView> (Resource.Id.history);
			TextView link = FindViewById<TextView> (Resource.Id.link);
			TextView content = FindViewById<TextView> (Resource.Id.content);

			ListView brands = FindViewById<ListView> (Resource.Id.brands);

			type.Text = selectedLiquor.GetLiquorType();
			description.Text =  selectedLiquor.GetDescription();
			history.Text = selectedLiquor.GetHistory();
			link.Text = selectedLiquor.GetLink();
			content.Text = selectedLiquor.GetAlcholContent();


			Liquor[] liquor = (Liquor[])new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(selectedLiquor.GetLiquorType()).Execute();
			IEnumerator<LiquorBrand> liquorBrands = liquor[0].GetLiquorBrands();

			ICollection items = new LinkedList  ();

			while (liquorBrands.MoveNext())
			{
				items.Add(liquorBrands.Current.GetBrandName());
			}

			//string[] items = new string[] { "Vegetables","Fruits","Flower Buds","Legumes","Bulbs","Tubers" };
			Object[] itms = items.ToArray();
			ArrayAdapter ListAdapter = new ArrayAdapter<Object>(this, Android.Resource.Layout.SimpleListItem1, itms);

			brands.SetAdapter (ListAdapter);
		}
	}
}

