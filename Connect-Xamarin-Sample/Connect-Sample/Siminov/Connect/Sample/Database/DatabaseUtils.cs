/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/



using Siminov.Connect.Sample.Model;
using Siminov.Core.Exception;
using Siminov.Core.Log;
using Siminov.Core.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Siminov.Connect.Sample.Database
{
	public class DatabaseUtils
	{
		public void PrepareData()
		{
			CreateLiquors();
		}

		private void CreateLiquors()
		{

			//Make Gin Object
			Liquor gin = new Liquor();
			gin.SetLiquorType(Liquor.LIQUOR_TYPE_GIN);
			gin.SetDescription("Gin is a spirit made with juniper berries.");
			gin.SetHistory("By the 11th century, Italian monks were flavoring crudely distilled spirits with juniper berries. During the Black Death, this drink was used, although ineffectively, as a remedy. As the science of distillation advanced from the Middle Ages into the Renaissance period, juniper was one of many botanicals employed by virtue of its perfume, flavour, and purported medicinal properties");
			gin.SetLink("http://en.wikipedia.org/wiki/Gin");
			gin.SetAlcholContent("Gin has a minimum alcohol content of 40 percent in the US (80 proof).");


			//Make Rum Object
			Liquor rum = new Liquor();
			rum.SetLiquorType(Liquor.LIQUOR_TYPE_RUM);
			rum.SetDescription("Rum is a distilled liquid made from molasses and sugarcane juice.");
			rum.SetHistory("The first distillation of rum originated in the Caribbean in the 17th centry.");
			rum.SetLink("http://en.wikipedia.org/wiki/Rum");
			rum.SetAlcholContent("Rum typically has an alcohol content in the range of 20 to 80 percent by volume (40 to 160 proof).");


			//Make Tequilla Object
			Liquor tequilla = new Liquor();
			tequilla.SetLiquorType(Liquor.LIQUOR_TYPE_TEQUILA);
			tequilla.SetDescription("Tequila is a spirit made with Blue Agave.");
			tequilla.SetHistory("The first distillation of tequila originated in Mexico in the 16th centry.");
			tequilla.SetLink("http://en.wikipedia.org/wiki/Tequila");
			tequilla.SetAlcholContent("Tequila typically has an alcohol content in the range of 35 to 55 percent by volume (70 to 110 proof).");


			//Make Vodka Object
			Liquor vodka = new Liquor();
			vodka.SetLiquorType(Liquor.LIQUOR_TYPE_VODKA);
			vodka.SetDescription("Vodka is a colorless liquid that contains a mixture of water and distilled ethanol. Vodka is made from a fermented substance such as potatoes, rye, wheat or sugar beet molasses.");
			vodka.SetHistory("Vodka originated in Russia inthe 14th centry.");
			vodka.SetLink("http://en.wikipedia.org/wiki/Vodka");
			vodka.SetAlcholContent("Vodka typically has an alcohol content in the range of 35 to 50 percent by volume (70 to 100 proof).");


			//Make Whiskey Object
			Liquor whiskey = new Liquor();
			whiskey.SetLiquorType(Liquor.LIQUOR_TYPE_WHISKEY);
			whiskey.SetDescription("Whiskey (or whisky) is a distilled liquid made from fermented grain mash.");
			whiskey.SetHistory("Distillation spread from Ireland to Scotland (about one hundred years later) and originated from the European continent in the later medieval centuries");
			whiskey.SetLink("http://en.wikipedia.org/wiki/Whisky");
			whiskey.SetAlcholContent("Whiskey has varying proof levels depending on the specific whiskey. Read more: http://wiki.answers.com/Q/What_percentage_of_alcohol_is_in_whisky#ixzz25n6vmBTZ");


			//Make Beer Object
			Liquor beer = new Liquor();
			beer.SetLiquorType(Liquor.LIQUOR_TYPE_BEER);
			beer.SetDescription("Beer is produced by the saccharification of starch and fermentation of the resulting sugar.");
			beer.SetHistory("Beer is one of the worlds oldest prepared beverages, possibly dating back to the early Neolithic or 9500 BC, when cereal was first farmed, and is recorded in the written history of ancient Egypt and Mesopotamia.");
			beer.SetLink("http://en.wikipedia.org/wiki/Beer");
			beer.SetAlcholContent("A beer that is 4.0 percent by volume is about 3.2 percent by weight");


			//Make Wine Object
			Liquor wine = new Liquor();
			wine.SetLiquorType(Liquor.LIQUOR_TYPE_WINE);
			wine.SetDescription("Wine is typically made of fermented grape juice.");
			wine.SetHistory("Wine dates back to 6000 BC and is believed to have originated in the area now considered Iran and Georgia.");
			wine.SetLink("http://en.wikipedia.org/wiki/Wine");
			wine.SetAlcholContent("100 grams (g) of wine is equivalent to 100 milliliters (mL) or 3.4 fluid ounces (fl oz.) of wine. 10.6 g of alcohol in 3.4 fl ounces is 13 percent alcohol by volume.");


			DatabaseDescriptor databaseDescriptor = wine.GetDatabaseDescriptor();

			try
			{
				Core.Database.Database.BeginTransaction(databaseDescriptor);

				gin.SaveOrUpdate();
				rum.SaveOrUpdate();
				tequilla.SaveOrUpdate();
				vodka.SaveOrUpdate();
				whiskey.SaveOrUpdate();
				beer.SaveOrUpdate();
				wine.SaveOrUpdate();

				CreateGinBrands(gin);
				CreateRumBrands(rum);
				CreateTequilaBrands(tequilla);
				CreateVodkaBrands(vodka);
				CreateWhiskeyBrands(whiskey);
				CreateBeerBrands(beer);
				CreateWineBrands(wine);

				Core.Database.Database.CommitTransaction(databaseDescriptor);
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(typeof(DatabaseUtils).Name, "createLiquors", "DatabaseException caught while creating liquors, " + databaseException.GetMessage());
			}

		}

		private void CreateGinBrands(Liquor liquor)
		{

			LiquorBrand theBotanist = new LiquorBrand();
			theBotanist.SetLiquor(liquor);
			theBotanist.SetBrandName(LiquorBrand.GIN_BRAND_THE_BOTANIST);
			theBotanist.SetCountry("Islay");
			theBotanist.SetDescription("The Botanist is a brand of gin produced by distilling nine botanicals into the alcohol through direct boiling followed by passing the vapors through a basket containing an additional 22 herbal ingredients.");
			theBotanist.SetLink("http://www.bruichladdich.com");

			LiquorBrand tanqueray = new LiquorBrand();
			tanqueray.SetLiquor(liquor);
			tanqueray.SetBrandName(LiquorBrand.GIN_BRAND_TANQUERAY);
			tanqueray.SetCountry("United Kingtom");
			tanqueray.SetDescription("Tanqueray is a form of London dry gin, a spirit produced through double-distillation with botanicals added to the spirit during the second distillation phase. Tanqueray was first distilled in 1830 in England, with production moved to Scotland after World War II. ");
			tanqueray.SetLink("http://www.tanqueray.com/");

			try
			{
				theBotanist.SaveOrUpdate();
				tanqueray.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(typeof(DatabaseUtils).Name, "createGinBrands", "DatabaseException caught while creating gin brands, " + databaseException.GetMessage());
			}
		}

		private void CreateRumBrands(Liquor liquor)
		{

			LiquorBrand bacardi = new LiquorBrand();
			bacardi.SetLiquor(liquor);
			bacardi.SetBrandName(LiquorBrand.RUM_BRAND_BACARDI);
			bacardi.SetCountry("Bermuda");
			bacardi.SetDescription("Bacardi Limited is the largest privately-held, family-owned spirits company in the world. Its brand portfolio comprises more than 200 brands and labels, including the eponymous Bacardi rum.");
			bacardi.SetLink("http://www1.bacardi.com/");

			LiquorBrand oldMonk = new LiquorBrand();
			oldMonk.SetLiquor(liquor);
			oldMonk.SetBrandName(LiquorBrand.RUM_BRAND_OLD_MONK);
			oldMonk.SetCountry("India");
			oldMonk.SetDescription("Old Monk Rum is dark rum aged and blended seven years in India. The rum is vatted and aged with whole vanilla and a number of other ingredients to create a heavily spiced flavor.");
			oldMonk.SetLink("http://en.wikipedia.org/wiki/Old_Monk");

			try
			{
				bacardi.SaveOrUpdate();
				oldMonk.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createRumBrands", "DatabaseException caught while creating rumbrands, " + databaseException.GetMessage());
			}
		}

		private void CreateTequilaBrands(Liquor liquor)
		{

			LiquorBrand patron = new LiquorBrand();
			patron.SetLiquor(liquor);
			patron.SetBrandName(LiquorBrand.TEQUILA_BRAND_PATRON);
			patron.SetCountry("Mexico");
			patron.SetDescription("Patron is a luxury brand of tequila produced in Mexico and sold in hand-blown, individually numbered bottles.");
			patron.SetLink("http://www.patrontequila.com");

			LiquorBrand sauzate = new LiquorBrand();
			sauzate.SetLiquor(liquor);
			sauzate.SetBrandName(LiquorBrand.TEQUILA_BRAND_SAUZA);
			sauzate.SetCountry("Mexico");
			sauzate.SetDescription("Sauza Tequila Import Company is a producer of tequila located in Tequila, a municipality of the state of Jalisco, Mexico. It was founded in 1873 when Don Cenobio Sauza started La Perseverancia distillery.");
			sauzate.SetLink("http://us.sauzatequila.com");

			try
			{
				patron.SaveOrUpdate();
				sauzate.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createTequilaBrands", "DatabaseException caught while creating tequila brands, " + databaseException.GetMessage());
			}
		}


		private void CreateVodkaBrands(Liquor liquor)
		{

			LiquorBrand absolut = new LiquorBrand();
			absolut.SetLiquor(liquor);
			absolut.SetBrandName(LiquorBrand.VODKA_BRAND_ABSOLUT);
			absolut.SetCountry("British");
			absolut.SetDescription("Smirnoff is a brand of vodka owned and produced by the British company Diageo. The Smirnoff brand began with a vodka distillery founded in Moscow by Pyotr Arsenievich Smirnov (1831–1898), the son of illiterate Russian peasants.[citation needed] It is now distributed in 130 countries. It is produced in several countries including USA, Italy, Northern Ireland and Scotland.");
			absolut.SetLink("http://www.smirnoff.com");

			LiquorBrand smirnoff = new LiquorBrand();
			smirnoff.SetLiquor(liquor);
			smirnoff.SetBrandName(LiquorBrand.VODKA_BRAND_SMIRNOFF);
			smirnoff.SetCountry("Sweden");
			smirnoff.SetDescription("Absolut Vodka is a brand of vodka, produced near Ahus, Skane, in southern Sweden. Absolut is owned by French group Pernod Ricard; they bought Absolut for 5.63 billion Euros in 2008 from the Swedish state.");
			smirnoff.SetLink("http://www.absolut.com/");

			try
			{
				absolut.SaveOrUpdate();
				smirnoff.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createVodkaBrands", "DatabaseException caught while creating vodka brands, " + databaseException.GetMessage());
			}
		}


		private void CreateWhiskeyBrands(Liquor liquor)
		{

			LiquorBrand jackDaniels = new LiquorBrand();
			jackDaniels.SetLiquor(liquor);
			jackDaniels.SetBrandName(LiquorBrand.WHISKEY_BRAND_JACK_DANIELS);
			jackDaniels.SetCountry("U.S");
			jackDaniels.SetDescription("Jack Daniels is a brand of sour mash Tennessee whiskey that is the best selling whiskey in the world.[1] It is known for its square bottles and black label. It is produced in Lynchburg, Tennessee by the Jack Daniel Distillery, which has been owned by the Brown-Forman Corporation since 1956.");
			jackDaniels.SetLink("http://www.jackdaniels.com");

			LiquorBrand johnnieWalker = new LiquorBrand();
			johnnieWalker.SetLiquor(liquor);
			johnnieWalker.SetBrandName(LiquorBrand.WHISKEY_BRAND_JOHNNIE_WALKER);
			johnnieWalker.SetCountry("Scotland");
			johnnieWalker.SetDescription("Johnnie Walker is a brand of Scotch Whisky owned by Diageo and originated in Kilmarnock, Ayrshire, Scotland. It is the most widely distributed brand of blended Scotch whisky in the world, sold in almost every country with yearly sales of over 130 million bottles.");
			johnnieWalker.SetLink("http://www.johnniewalker.com");

			try
			{
				jackDaniels.SaveOrUpdate();
				johnnieWalker.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createWhiskeyBrands", "DatabaseException caught while creating whiskey brands, " + databaseException.GetMessage());
			}
		}



		private void CreateBeerBrands(Liquor liquor)
		{

			LiquorBrand heineken = new LiquorBrand();
			heineken.SetLiquor(liquor);
			heineken.SetBrandName(LiquorBrand.BEER_BRAND_HEINEKEN);
			heineken.SetCountry("Dutch");
			heineken.SetDescription("Heineken Lager Beer (Dutch: Heineken Pilsener) or simply Heineken is a pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International.");
			heineken.SetLink("http://www.heineken.com");


			LiquorBrand kingfisher = new LiquorBrand();
			kingfisher.SetLiquor(liquor);
			kingfisher.SetBrandName(LiquorBrand.BEER_BRAND_KINGFISHER);
			kingfisher.SetCountry("India");
			kingfisher.SetDescription("Kingfisher is an Indian beer brewed by United Breweries Group. The brand was launched in 1978. With a market share of over 36%, it is Indias largest selling beer, with 1 out of every 3 bottles of beer sold in India being a Kingfisher brand. It is currently available in 52 countries outside India.");
			kingfisher.SetLink("http://www.kingfisherworld.com/");

			try
			{
				heineken.SaveOrUpdate();
				kingfisher.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createBeerBrands", "DatabaseException caught while creating beer brands, " + databaseException.GetMessage());
			}
		}


		private void CreateWineBrands(Liquor liquor)
		{

			LiquorBrand gallo = new LiquorBrand();
			gallo.SetLiquor(liquor);
			gallo.SetBrandName(LiquorBrand.WINE_BRAND_GALLO);
			gallo.SetCountry("California");
			gallo.SetDescription("E and J Gallo Winery was founded in 1933 by Ernest Gallo and Julio Gallo in Modesto, California. E and J Gallo Winery is the largest exporter of California wines and is a large promoter of wines from Sonoma County.");
			gallo.SetLink("http://gallo.com/");


			LiquorBrand yellowTail = new LiquorBrand();
			yellowTail.SetLiquor(liquor);
			yellowTail.SetBrandName(LiquorBrand.WINE_BRAND_YELLOW_TAIL);
			yellowTail.SetCountry("Australia");
			yellowTail.SetDescription("Yellow Tail (officially typeset is a brand of wine produced by Casella Wines Pty Ltd. Casella wines is based in Yenda, Australia, which has a population of approximately 1400 people.");
			yellowTail.SetLink("http://www.yellowtailwine.com/");

			try
			{
				gallo.SaveOrUpdate();
				yellowTail.SaveOrUpdate();
			}
			catch (DatabaseException databaseException)
			{
				Log.Error(this.GetType().Name, "createWineBrands", "DatabaseException caught while creating wines brands, " + databaseException.GetMessage());
			}
		}
	}
}
