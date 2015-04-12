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


package siminov.core.sample.database;

import siminov.core.exception.DatabaseException;
import siminov.core.log.Log;
import siminov.core.resource.ResourceManager;
import siminov.core.sample.R;
import siminov.core.sample.model.Liquor;
import siminov.core.sample.model.LiquorBrand;
import siminov.core.sample.model.LiquorShopMapping;
import siminov.core.sample.model.Pricing;
import siminov.core.sample.model.Shop;
import siminov.core.utils.Utils;
import android.content.Context;

public class DatabaseUtils {

	public void prepareData() {
		createLiquors();
	}

	private void createLiquors() {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		//Make Gin Object
		Liquor liquor1 = new Liquor();
		liquor1.setLiquorType(Liquor.LIQUOR_TYPE_GIN);
		liquor1.setDescription(applicationContext.getString(R.string.gin_description));
		liquor1.setHistory(applicationContext.getString(R.string.gin_history));
		liquor1.setLink(applicationContext.getString(R.string.gin_link));
		liquor1.setAlcholContent(applicationContext.getString(R.string.gin_alchol_content));


		//Make Rum Object
		Liquor liquor2 = new Liquor();
		liquor2.setLiquorType(Liquor.LIQUOR_TYPE_RUM);
		liquor2.setDescription(applicationContext.getString(R.string.rum_description));
		liquor2.setHistory(applicationContext.getString(R.string.rum_history));
		liquor2.setLink(applicationContext.getString(R.string.rum_link));
		liquor2.setAlcholContent(applicationContext.getString(R.string.rum_alchol_content));


		//Make Tequilla Object
		Liquor liquor3 = new Liquor();
		liquor3.setLiquorType(Liquor.LIQUOR_TYPE_TEQUILA);
		liquor3.setDescription(applicationContext.getString(R.string.tequilla_description));
		liquor3.setHistory(applicationContext.getString(R.string.tequilla_history));
		liquor3.setLink(applicationContext.getString(R.string.tequilla_link));
		liquor3.setAlcholContent(applicationContext.getString(R.string.tequilla_alchol_content));

		
		//Make Vodka Object
		Liquor liquor4 = new Liquor();
		liquor4.setLiquorType(Liquor.LIQUOR_TYPE_VODKA);
		liquor4.setDescription(applicationContext.getString(R.string.vodka_descrption));
		liquor4.setHistory(applicationContext.getString(R.string.vodka_history));
		liquor4.setLink(applicationContext.getString(R.string.vodka_link));
		liquor4.setAlcholContent(applicationContext.getString(R.string.vodka_alchol_content));
		
		
		//Make Whiskey Object
		Liquor liquor5 = new Liquor();
		liquor5.setLiquorType(Liquor.LIQUOR_TYPE_WHISKEY);
		liquor5.setDescription(applicationContext.getString(R.string.whiskey_description));
		liquor5.setHistory(applicationContext.getString(R.string.whiskey_history));
		liquor5.setLink(applicationContext.getString(R.string.whiskey_link));
		liquor5.setAlcholContent(applicationContext.getString(R.string.whiskey_alchol_content));
		
		
		//Make Beer Object
		Liquor liquor6 = new Liquor();
		liquor6.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
		liquor6.setDescription(applicationContext.getString(R.string.beer_description));
		liquor6.setHistory(applicationContext.getString(R.string.beer_history));
		liquor6.setLink(applicationContext.getString(R.string.beer_link));
		liquor6.setAlcholContent(applicationContext.getString(R.string.beer_alchol_content));

		
		//Make Wine Object
		Liquor liquor7 = new Liquor();
		liquor7.setLiquorType(Liquor.LIQUOR_TYPE_WINE);
		liquor7.setDescription(applicationContext.getString(R.string.wine_description));
		liquor7.setHistory(applicationContext.getString(R.string.wine_history));
		liquor7.setLink(applicationContext.getString(R.string.wine_link));
		liquor7.setAlcholContent(applicationContext.getString(R.string.wine_alchol_content));

		
		Shop shop1 = new Shop();
		shop1.setShopId(1);
		shop1.setName("Shop 1");
		shop1.setAddress("Shop 1 Address");
		
		Shop shop2 = new Shop();
		shop2.setShopId(2);
		shop2.setName("Shop 2");
		shop2.setAddress("Shop 2 Address");

		Shop shop3 = new Shop();
		shop3.setShopId(3);
		shop3.setName("Shop 3");
		shop3.setAddress("Shop 3 Address");

		Shop shop4 = new Shop();
		shop4.setShopId(4);
		shop4.setName("Shop 4");
		shop4.setAddress("Shop 4 Address");
		
		Shop shop5 = new Shop();
		shop5.setShopId(5);
		shop5.setName("Shop 5");
		shop5.setAddress("Shop 5 Address");

		Shop shop6 = new Shop();
		shop6.setShopId(6);
		shop6.setName("Shop 6");
		shop6.setAddress("Shop 6 Address");
		
		Shop shop7 = new Shop();
		shop7.setShopId(7);
		shop7.setName("Shop 7");
		shop7.setAddress("Shop 7 Address");
		
		
		LiquorShopMapping liquorShopMapping1 = new LiquorShopMapping();
		liquorShopMapping1.setLiquor(liquor1);
		liquorShopMapping1.setShop(shop1);
		

		
		LiquorShopMapping liquorShopMapping2 = new LiquorShopMapping();
		liquorShopMapping2.setLiquor(liquor2);
		liquorShopMapping2.setShop(shop2);

		
		
		LiquorShopMapping liquorShopMapping3 = new LiquorShopMapping();
		liquorShopMapping3.setLiquor(liquor3);
		liquorShopMapping3.setShop(shop3);

		
		LiquorShopMapping liquorShopMapping4 = new LiquorShopMapping();
		liquorShopMapping4.setLiquor(liquor4);
		liquorShopMapping4.setShop(shop4);

		
		
		LiquorShopMapping liquorShopMapping5 = new LiquorShopMapping();
		liquorShopMapping5.setLiquor(liquor5);
		liquorShopMapping5.setShop(shop5);

		
		
		LiquorShopMapping liquorShopMapping6 = new LiquorShopMapping();
		liquorShopMapping6.setLiquor(liquor6);
		liquorShopMapping6.setShop(shop6);

		
		LiquorShopMapping liquorShopMapping7 = new LiquorShopMapping();
		liquorShopMapping7.setLiquor(liquor7);
		liquorShopMapping7.setShop(shop7);
		
		try {
			liquor1.saveOrUpdate();
			liquor2.saveOrUpdate();
			liquor3.saveOrUpdate();
			liquor4.saveOrUpdate();
			liquor5.saveOrUpdate();
			liquor6.saveOrUpdate();
			liquor7.saveOrUpdate();
			
			shop1.saveOrUpdate();
			shop2.saveOrUpdate();
			shop3.saveOrUpdate();
			shop4.saveOrUpdate();
			shop5.saveOrUpdate();
			shop6.saveOrUpdate();
			shop7.saveOrUpdate();

			liquorShopMapping1.saveOrUpdate();
			liquorShopMapping2.saveOrUpdate();
			liquorShopMapping3.saveOrUpdate();
			liquorShopMapping4.saveOrUpdate();
			liquorShopMapping5.saveOrUpdate();
			liquorShopMapping6.saveOrUpdate();
			liquorShopMapping7.saveOrUpdate();

			
			
			createGinBrands(liquor1);
			createRumBrands(liquor2);
			createTequilaBrands(liquor3);
			createVodkaBrands(liquor4);
			createWhiskeyBrands(liquor5);
			createBeerBrands(liquor6);
			createWineBrands(liquor7);
		} catch(DatabaseException databaseException) {
			Log.error(DatabaseUtils.class.getName(), "createLiquors", "DatabaseException caught while creating liquors, " + databaseException.getMessage());
		}
	}

	private void createGinBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		LiquorBrand theBotanist = new LiquorBrand();
		theBotanist.setLiquor(liquor);
		theBotanist.setBrandName(LiquorBrand.GIN_BRAND_THE_BOTANIST);
		theBotanist.setCountry(applicationContext.getString(R.string.gin_brand_the_botanist_country));
		theBotanist.setDescription(applicationContext.getString(R.string.gin_brand_the_botanist_description));
		theBotanist.setLink(applicationContext.getString(R.string.gin_brand_the_botanist_link));
		theBotanist.setPricing(generatePricing(theBotanist));
		liquor.addLiquorBrand(theBotanist);
		
		LiquorBrand tanqueray = new LiquorBrand();
		tanqueray.setLiquor(liquor);
		tanqueray.setBrandName(LiquorBrand.GIN_BRAND_TANQUERAY);
		tanqueray.setCountry(applicationContext.getString(R.string.gin_brand_tanqueray_country));
		tanqueray.setDescription(applicationContext.getString(R.string.gin_brand_tanqueray_description));
		tanqueray.setLink(applicationContext.getString(R.string.gin_brand_tanqueray_link));
		tanqueray.setPricing(generatePricing(tanqueray));
		liquor.addLiquorBrand(tanqueray);
		
		
		try {
			theBotanist.saveOrUpdate();
			tanqueray.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(DatabaseUtils.class.getName(), "createGinBrands", "DatabaseException caught while creating gin brands, " + databaseException.getMessage());
		}
	}

	private void createRumBrands(Liquor liquor) {
		
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		LiquorBrand bacardi = new LiquorBrand();
		bacardi.setLiquor(liquor);
		bacardi.setBrandName(LiquorBrand.RUM_BRAND_BACARDI);
		bacardi.setCountry(applicationContext.getString(R.string.rum_brand_bacardi_country));
		bacardi.setDescription(applicationContext.getString(R.string.rum_brand_bacardi_description));
		bacardi.setLink(applicationContext.getString(R.string.rum_brand_bacardi_link));
		bacardi.setPricing(generatePricing(bacardi));
		liquor.addLiquorBrand(bacardi);
		
		LiquorBrand oldMonk = new LiquorBrand();
		oldMonk.setLiquor(liquor);
		oldMonk.setBrandName(LiquorBrand.RUM_BRAND_OLD_MONK);
		oldMonk.setCountry(applicationContext.getString(R.string.rum_brand_old_monk_country));
		oldMonk.setDescription(applicationContext.getString(R.string.rum_brand_old_monk_description));
		oldMonk.setLink(applicationContext.getString(R.string.rum_brand_old_monk_link));
		oldMonk.setPricing(generatePricing(oldMonk));
		liquor.addLiquorBrand(oldMonk);
		
		try {
			bacardi.saveOrUpdate();
			oldMonk.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createRumBrands", "DatabaseException caught while creating rumbrands, " + databaseException.getMessage());
		}
	}

	private void createTequilaBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		LiquorBrand patron = new LiquorBrand();
		patron.setLiquor(liquor);
		patron.setBrandName(LiquorBrand.TEQUILA_BRAND_PATRON);
		patron.setCountry(applicationContext.getString(R.string.tequila_brand_patron_country));
		patron.setDescription(applicationContext.getString(R.string.tequila_brand_patron_description));
		patron.setLink(applicationContext.getString(R.string.tequila_brand_patron_link));
		patron.setPricing(generatePricing(patron));
		liquor.addLiquorBrand(patron);
		
		LiquorBrand sauzate = new LiquorBrand();
		sauzate.setLiquor(liquor);
		sauzate.setBrandName(LiquorBrand.TEQUILA_BRAND_SAUZA);
		sauzate.setCountry(applicationContext.getString(R.string.tequila_brand_sauzate_country));
		sauzate.setDescription(applicationContext.getString(R.string.tequila_brand_sauzate_description));
		sauzate.setLink(applicationContext.getString(R.string.tequila_brand_sauzate_link));
		sauzate.setPricing(generatePricing(sauzate));
		liquor.addLiquorBrand(sauzate);
		
		try {
			patron.saveOrUpdate();
			sauzate.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createTequilaBrands", "DatabaseException caught while creating tequila brands, " + databaseException.getMessage());
		}
	}
	
	
	private void createVodkaBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		LiquorBrand absolut  = new LiquorBrand();
		absolut.setLiquor(liquor);
		absolut.setBrandName(LiquorBrand.VODKA_BRAND_ABSOLUT);
		absolut.setCountry(applicationContext.getString(R.string.vodka_brand_absolut_country));
		absolut.setDescription(applicationContext.getString(R.string.vodka_brand_absolut_description));
		absolut.setLink(applicationContext.getString(R.string.vodka_brand_absolut_link));
		absolut.setPricing(generatePricing(absolut));
		liquor.addLiquorBrand(absolut);
		
		LiquorBrand smirnoff = new LiquorBrand();
		smirnoff.setLiquor(liquor);
		smirnoff.setBrandName(LiquorBrand.VODKA_BRAND_SMIRNOFF);
		smirnoff.setCountry(applicationContext.getString(R.string.vodka_brand_smirnoff_country));
		smirnoff.setDescription(applicationContext.getString(R.string.vodka_brand_smirnoff_description));
		smirnoff.setLink(applicationContext.getString(R.string.vodka_brand_smirnoff_link));
		smirnoff.setPricing(generatePricing(smirnoff));
		liquor.addLiquorBrand(smirnoff);
		
		try {
			absolut.saveOrUpdate();
			smirnoff.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createVodkaBrands", "DatabaseException caught while creating vodka brands, " + databaseException.getMessage());
		}
	}
	
	
	private void createWhiskeyBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		LiquorBrand jackDaniels = new LiquorBrand();
		jackDaniels.setLiquor(liquor);
		jackDaniels.setBrandName(LiquorBrand.WHISKEY_BRAND_JACK_DANIELS);
		jackDaniels.setCountry(applicationContext.getString(R.string.whiskey_brand_jack_daniels_country));
		jackDaniels.setDescription(applicationContext.getString(R.string.whiskey_brand_jack_daniels_description));
		jackDaniels.setLink(applicationContext.getString(R.string.whiskey_brand_jack_daniels_link));
		jackDaniels.setPricing(generatePricing(jackDaniels));
		liquor.addLiquorBrand(jackDaniels);
		
		LiquorBrand johnnieWalker = new LiquorBrand();
		johnnieWalker.setLiquor(liquor);
		johnnieWalker.setBrandName(LiquorBrand.WHISKEY_BRAND_JOHNNIE_WALKER);
		johnnieWalker.setCountry(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_country));
		johnnieWalker.setDescription(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_description));
		johnnieWalker.setLink(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_link));
		johnnieWalker.setPricing(generatePricing(johnnieWalker));
		liquor.addLiquorBrand(johnnieWalker);
		
		
		try {
			jackDaniels.saveOrUpdate();
			johnnieWalker.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createWhiskeyBrands", "DatabaseException caught while creating whiskey brands, " + databaseException.getMessage());
		}
	}
	
	

	private void createBeerBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		LiquorBrand heineken = new LiquorBrand();
		heineken.setLiquor(liquor);
		heineken.setBrandName(LiquorBrand.BEER_BRAND_HEINEKEN);
		heineken.setCountry(applicationContext.getString(R.string.beer_brand_heineken_country));
		heineken.setDescription(applicationContext.getString(R.string.beer_brand_heineken_description));
		heineken.setLink(applicationContext.getString(R.string.beer_brand_heineken_link));
		heineken.setPricing(generatePricing(heineken));
		liquor.addLiquorBrand(heineken);
		
		
		LiquorBrand kingfisher = new LiquorBrand();
		kingfisher.setLiquor(liquor);
		kingfisher.setBrandName(LiquorBrand.BEER_BRAND_KINGFISHER);
		kingfisher.setCountry(applicationContext.getString(R.string.beer_brand_kingfisher_country));
		kingfisher.setDescription(applicationContext.getString(R.string.beer_brand_kingfisher_description));
		kingfisher.setLink(applicationContext.getString(R.string.beer_brand_kingfisher_link));
		kingfisher.setPricing(generatePricing(kingfisher));
		liquor.addLiquorBrand(kingfisher);
		
		try {
		 	heineken.saveOrUpdate();
			kingfisher.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createBeerBrands", "DatabaseException caught while creating beer brands, " + databaseException.getMessage());
		}
	}
	
	
	private void createWineBrands(Liquor liquor) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		LiquorBrand gallo = new LiquorBrand();
		gallo.setLiquor(liquor);
		gallo.setBrandName(LiquorBrand.WINE_BRAND_GALLO);
		gallo.setCountry(applicationContext.getString(R.string.wine_brand_gallo_country));
		gallo.setDescription(applicationContext.getString(R.string.wine_brand_gallo_description));
		gallo.setLink(applicationContext.getString(R.string.wine_brand_gallo_link));
		gallo.setPricing(generatePricing(gallo));
		liquor.addLiquorBrand(gallo);
	
		LiquorBrand yellowTail = new LiquorBrand();
		yellowTail.setLiquor(liquor);
		yellowTail.setBrandName(LiquorBrand.WINE_BRAND_YELLOW_TAIL);
		yellowTail.setCountry(applicationContext.getString(R.string.wine_brand_yellow_tail_country));
		yellowTail.setDescription(applicationContext.getString(R.string.wine_brand_yellow_tail_description));
		yellowTail.setLink(applicationContext.getString(R.string.wine_brand_yellow_tail_link));
		yellowTail.setPricing(generatePricing(yellowTail));
		liquor.addLiquorBrand(yellowTail);
		
		try {
			gallo.saveOrUpdate();
			yellowTail.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createWineBrands", "DatabaseException caught while creating wines brands, " + databaseException.getMessage());
		}
	}
	
	private Pricing generatePricing(LiquorBrand liquorBrand) {
		
		Pricing pricing = new Pricing();
		pricing.setLiquorBrand(liquorBrand);
		pricing.setPriceId(Utils.generateUniqueId());
		pricing.setPrice(100);
		pricing.setTax(10);
		pricing.setDiscount(10);
		
		return pricing;
	}
}
