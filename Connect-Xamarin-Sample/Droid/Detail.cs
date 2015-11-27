
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

using Siminov.Connect.Sample.Model;

using Siminov.Connect.Sync;
using Siminov.Connect.Sync.Design;
using Siminov.Connect.Sample;
using Siminov.Connect.Sample.Services;

namespace ConnectSample.Droid
{
	[Activity (Label = "Detail")]			
	public class Detail : Activity
	{

		private TextView type;
		private TextView description;
		private TextView history;
		private TextView link;
		private TextView content; 

		private ListView brands;

		private Liquor selectedLiquor;

		protected override void OnCreate (Bundle bundle)
		{
			base.OnCreate (bundle);

			SetContentView (Resource.Layout.Detail);

			selectedLiquor = ConnectSample.Droid.Home.liquor;

			type = FindViewById<TextView> (Resource.Id.type);
			description = FindViewById<TextView> (Resource.Id.description);
			history = FindViewById<TextView> (Resource.Id.history);
			link = FindViewById<TextView> (Resource.Id.link);
			content = FindViewById<TextView> (Resource.Id.content);

			brands = FindViewById<ListView> (Resource.Id.brands);

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

		public void Refresh()
		{
			Liquor[] liquor = (Liquor[])new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(selectedLiquor.GetLiquorType()).Execute();
			IEnumerator<LiquorBrand> liquorBrands = liquor[0].GetLiquorBrands();

			type.Text = liquor[0].GetLiquorType();
			description.Text = liquor[0].GetDescription();
			history.Text = liquor[0].GetHistory();
			content.Text = liquor[0].GetAlcholContent();
			link.Text = liquor[0].GetLink();


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

		private void GetBrands()
		{

			Liquor[] liquors = (Liquor[])new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(selectedLiquor.GetLiquorType()).Execute();
			Liquor liquor = liquors[0];

			/*ISyncRequest syncRequest = new Siminov.Connect.Sync.SyncRequest();
			syncRequest.SetName(Constants.SYNC_LIQUOR_BRANDS);
			syncRequest.AddResource(GetLiquorBrands.LIQUOR_NAME, liquor.GetLiquorType());
			syncRequest.AddResource(GetLiquorBrands.LIQUOR, liquor);
			syncRequest.AddResource(GetLiquorBrands.UI_COMPONENT, this);

			SyncHandler syncHandler = SyncHandler.GetInstance();
			syncHandler.Handle(syncRequest);*/

			GetLiquorBrands getLiquorBrands = new GetLiquorBrands();
            getLiquorBrands.AddResource(GetLiquorBrands.LIQUOR_NAME, liquor.GetLiquorType());
            getLiquorBrands.AddResource(GetLiquorBrands.LIQUOR, liquor);
            getLiquorBrands.AddResource(GetLiquorBrands.UI_COMPONENT, this);

            getLiquorBrands.Invoke();
		}



	}
}

