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


package siminov.orm.template.database;

import siminov.orm.exception.DatabaseException;
import siminov.orm.log.Log;
import siminov.orm.resource.ResourceManager;
import siminov.orm.template.R;
import siminov.orm.template.model.Liquor;
import siminov.orm.template.model.LiquorBrand;
import android.content.Context;

public class DatabaseUtils {

	public void prepareData() {
		createLiquors();
	}

	private void createLiquors() {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		//Make Gin Object
		Liquor gin = new Liquor();
		gin.setLiquorType(Liquor.LIQUOR_TYPE_GIN);
		gin.setDescription(applicationContext.getString(R.string.gin_description));
		gin.setHistory(applicationContext.getString(R.string.gin_history));
		gin.setLink(applicationContext.getString(R.string.gin_link));
		gin.setAlcholContent(applicationContext.getString(R.string.gin_alchol_content));

		
		//Make Rum Object
		Liquor rum = new Liquor();
		rum.setLiquorType(Liquor.LIQUOR_TYPE_RUM);
		rum.setDescription(applicationContext.getString(R.string.rum_description));
		rum.setHistory(applicationContext.getString(R.string.rum_history));
		rum.setLink(applicationContext.getString(R.string.rum_link));
		rum.setAlcholContent(applicationContext.getString(R.string.rum_alchol_content));


		//Make Tequilla Object
		Liquor tequilla = new Liquor();
		tequilla.setLiquorType(Liquor.LIQUOR_TYPE_TEQUILA);
		tequilla.setDescription(applicationContext.getString(R.string.tequilla_description));
		tequilla.setHistory(applicationContext.getString(R.string.tequilla_history));
		tequilla.setLink(applicationContext.getString(R.string.tequilla_link));
		tequilla.setAlcholContent(applicationContext.getString(R.string.tequilla_alchol_content));

		
		//Make Vodka Object
		Liquor vodka = new Liquor();
		vodka.setLiquorType(Liquor.LIQUOR_TYPE_VODKA);
		vodka.setDescription(applicationContext.getString(R.string.vodka_descrption));
		vodka.setHistory(applicationContext.getString(R.string.vodka_history));
		vodka.setLink(applicationContext.getString(R.string.vodka_link));
		vodka.setAlcholContent(applicationContext.getString(R.string.vodka_alchol_content));
		
		
		//Make Whiskey Object
		Liquor whiskey = new Liquor();
		whiskey.setLiquorType(Liquor.LIQUOR_TYPE_WHISKEY);
		whiskey.setDescription(applicationContext.getString(R.string.whiskey_description));
		whiskey.setHistory(applicationContext.getString(R.string.whiskey_history));
		whiskey.setLink(applicationContext.getString(R.string.whiskey_link));
		whiskey.setAlcholContent(applicationContext.getString(R.string.whiskey_alchol_content));
		
		
		//Make Beer Object
		Liquor beer = new Liquor();
		beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
		beer.setDescription(applicationContext.getString(R.string.beer_description));
		beer.setHistory(applicationContext.getString(R.string.beer_history));
		beer.setLink(applicationContext.getString(R.string.beer_link));
		beer.setAlcholContent(applicationContext.getString(R.string.beer_alchol_content));

		
		//Make Wine Object
		Liquor wine = new Liquor();
		wine.setLiquorType(Liquor.LIQUOR_TYPE_WINE);
		wine.setDescription(applicationContext.getString(R.string.wine_description));
		wine.setHistory(applicationContext.getString(R.string.wine_history));
		wine.setLink(applicationContext.getString(R.string.wine_link));
		wine.setAlcholContent(applicationContext.getString(R.string.wine_alchol_content));


		try {
			gin.saveOrUpdate();
			rum.saveOrUpdate();
			tequilla.saveOrUpdate();
			vodka.saveOrUpdate();
			whiskey.saveOrUpdate();
			beer.saveOrUpdate();
			wine.saveOrUpdate();
			
			createGinBrands(gin);
			createRumBrands(rum);
			createTequilaBrands(tequilla);
			createVodkaBrands(vodka);
			createWhiskeyBrands(whiskey);
			createBeerBrands(beer);
			createWineBrands(wine);
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

		LiquorBrand tanqueray = new LiquorBrand();
		tanqueray.setLiquor(liquor);
		tanqueray.setBrandName(LiquorBrand.GIN_BRAND_TANQUERAY);
		tanqueray.setCountry(applicationContext.getString(R.string.gin_brand_tanqueray_country));
		tanqueray.setDescription(applicationContext.getString(R.string.gin_brand_tanqueray_description));
		tanqueray.setLink(applicationContext.getString(R.string.gin_brand_tanqueray_link));

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
		
		LiquorBrand oldMonk = new LiquorBrand();
		oldMonk.setLiquor(liquor);
		oldMonk.setBrandName(LiquorBrand.RUM_BRAND_OLD_MONK);
		oldMonk.setCountry(applicationContext.getString(R.string.rum_brand_old_monk_country));
		oldMonk.setDescription(applicationContext.getString(R.string.rum_brand_old_monk_description));
		oldMonk.setLink(applicationContext.getString(R.string.rum_brand_old_monk_link));

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

		LiquorBrand sauzate = new LiquorBrand();
		sauzate.setLiquor(liquor);
		sauzate.setBrandName(LiquorBrand.TEQUILA_BRAND_SAUZA);
		sauzate.setCountry(applicationContext.getString(R.string.tequila_brand_sauzate_country));
		sauzate.setDescription(applicationContext.getString(R.string.tequila_brand_sauzate_description));
		sauzate.setLink(applicationContext.getString(R.string.tequila_brand_sauzate_link));

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
		
		LiquorBrand smirnoff = new LiquorBrand();
		smirnoff.setLiquor(liquor);
		smirnoff.setBrandName(LiquorBrand.VODKA_BRAND_SMIRNOFF);
		smirnoff.setCountry(applicationContext.getString(R.string.vodka_brand_smirnoff_country));
		smirnoff.setDescription(applicationContext.getString(R.string.vodka_brand_smirnoff_description));
		smirnoff.setLink(applicationContext.getString(R.string.vodka_brand_smirnoff_link));
		
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
		
		LiquorBrand johnnieWalker = new LiquorBrand();
		johnnieWalker.setLiquor(liquor);
		johnnieWalker.setBrandName(LiquorBrand.WHISKEY_BRAND_JOHNNIE_WALKER);
		johnnieWalker.setCountry(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_country));
		johnnieWalker.setDescription(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_description));
		johnnieWalker.setLink(applicationContext.getString(R.string.whiskey_brand_johnnie_walker_link));
		
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
		
		
		LiquorBrand kingfisher = new LiquorBrand();
		kingfisher.setLiquor(liquor);
		kingfisher.setBrandName(LiquorBrand.BEER_BRAND_KINGFISHER);
		kingfisher.setCountry(applicationContext.getString(R.string.beer_brand_kingfisher_country));
		kingfisher.setDescription(applicationContext.getString(R.string.beer_brand_kingfisher_description));
		kingfisher.setLink(applicationContext.getString(R.string.beer_brand_kingfisher_link));
		
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
	
	
		LiquorBrand yellowTail = new LiquorBrand();
		yellowTail.setLiquor(liquor);
		yellowTail.setBrandName(LiquorBrand.WINE_BRAND_YELLOW_TAIL);
		yellowTail.setCountry(applicationContext.getString(R.string.wine_brand_yellow_tail_country));
		yellowTail.setDescription(applicationContext.getString(R.string.wine_brand_yellow_tail_description));
		yellowTail.setLink(applicationContext.getString(R.string.wine_brand_yellow_tail_link));
		
		try {
			gallo.saveOrUpdate();
			yellowTail.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createWineBrands", "DatabaseException caught while creating wines brands, " + databaseException.getMessage());
		}
	}
}
