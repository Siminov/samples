﻿using connect_sample.Common;
using Siminov.Connect.Sample;
using Siminov.Connect.Sample.Model;
using Siminov.Connect.Sample.Services;
using Siminov.Connect.Sync;
using Siminov.Connect.Sync.Design;
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
    public sealed partial class Detail : Page
    {

        private NavigationHelper navigationHelper;
        private ObservableDictionary defaultViewModel = new ObservableDictionary();

        private String brandName;


        /// <summary>
        /// NavigationHelper is used on each page to aid in navigation and 
        /// process lifetime management
        /// </summary>
        public NavigationHelper NavigationHelper
        {
            get { return this.navigationHelper; }
        }


        public Detail()
        {
            this.InitializeComponent();
            this.navigationHelper = new NavigationHelper(this);
            this.navigationHelper.LoadState += navigationHelper_LoadState;
            this.navigationHelper.SaveState += navigationHelper_SaveState;

            //GetBrands();
        }

        /// <summary>
        /// Populates the page with content passed during navigation. Any saved state is also
        /// provided when recreating a page from a prior session.
        /// </summary>
        /// <param name="sender">
        /// The source of the event; typically <see cref="NavigationHelper"/>
        /// </param>
        /// <param name="e">Event data that provides both the navigation parameter passed to
        /// <see cref="Frame.Navigate(Type, Object)"/> when this page was initially requested and
        /// a dictionary of state preserved by this page during an earlier
        /// session. The state will be null the first time a page is visited.</param>
        private void navigationHelper_LoadState(object sender, LoadStateEventArgs e)
        {
            brandName = e.NavigationParameter as string;
            GetBrands();
        }

        /// <summary>
        /// Preserves state associated with this page in case the application is suspended or the
        /// page is discarded from the navigation cache.  Values must conform to the serialization
        /// requirements of <see cref="SuspensionManager.SessionState"/>.
        /// </summary>
        /// <param name="sender">The source of the event; typically <see cref="NavigationHelper"/></param>
        /// <param name="e">Event data that provides an empty dictionary to be populated with
        /// serializable state.</param>
        private void navigationHelper_SaveState(object sender, SaveStateEventArgs e)
        {
        }

        #region NavigationHelper registration

        /// The methods provided in this section are simply used to allow
        /// NavigationHelper to respond to the page's navigation methods.
        /// 
        /// Page specific logic should be placed in event handlers for the  
        /// <see cref="GridCS.Common.NavigationHelper.LoadState"/>
        /// and <see cref="GridCS.Common.NavigationHelper.SaveState"/>.
        /// The navigation parameter is available in the LoadState method 
        /// in addition to page state preserved during an earlier session.

        protected override void OnNavigatedTo(NavigationEventArgs e)
        {
            navigationHelper.OnNavigatedTo(e);
        }

        protected override void OnNavigatedFrom(NavigationEventArgs e)
        {
            navigationHelper.OnNavigatedFrom(e);
        }

        public void Refresh()
        {
            Liquor[] liquor = (Liquor[])new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(brandName).Execute();
            IEnumerator<LiquorBrand> liquorBrands = liquor[0].GetLiquorBrands();

            brand.Text = liquor[0].GetLiquorType();
            description.Text = liquor[0].GetDescription();
            history.Text = liquor[0].GetHistory();
            alcholContent.Text = liquor[0].GetAlcholContent();
            link.Text = liquor[0].GetLink();


            while (liquorBrands.MoveNext())
            {
                liquorBrandList.Items.Add(liquorBrands.Current.GetBrandName());
            }
        }

        private void GetBrands()
        {

            Liquor[] liquors = (Liquor[])new Liquor().Select().Where(Liquor.LIQUOR_TYPE).EqualTo(brandName).Execute();
            Liquor liquor = liquors[0];

            ISyncRequest syncRequest = new SyncRequest();
            syncRequest.SetName(Constants.SYNC_LIQUOR_BRANDS);
            syncRequest.AddResource(GetLiquorBrands.LIQUOR_NAME, liquor.GetLiquorType());
            syncRequest.AddResource(GetLiquorBrands.LIQUOR, liquor);
            syncRequest.AddResource(GetLiquorBrands.UI_COMPONENT, this);

            SyncHandler syncHandler = SyncHandler.GetInstance();
            syncHandler.Handle(syncRequest);

            /*GetLiquorBrands getLiquorBrands = new GetLiquorBrands();
            getLiquorBrands.AddResource(GetLiquorBrands.LIQUOR_NAME, liquor.GetLiquorType());
            getLiquorBrands.AddResource(GetLiquorBrands.LIQUOR, liquor);
            getLiquorBrands.AddResource(GetLiquorBrands.UI_COMPONENT, this);

            getLiquorBrands.Invoke();*/
        }

        #endregion
    }
}