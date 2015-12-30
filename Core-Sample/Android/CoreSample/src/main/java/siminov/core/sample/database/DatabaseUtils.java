/**
 * [SIMINOV FRAMEWORK]
 * Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
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
import siminov.core.sample.model.Book;
import siminov.core.sample.model.Lession;
import siminov.core.sample.model.BookShopMapping;
import siminov.core.sample.model.Pricing;
import siminov.core.sample.model.Shop;
import siminov.core.utils.Utils;
import android.content.Context;

public class DatabaseUtils {

	public void prepareData() {
		createBooks();
	}

	private void createBooks() {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		//Make C Book
		Book book1 = new Book();
		book1.setTitle(Book.BOOK_TITLE_C);
		book1.setDescription(applicationContext.getString(R.string.c_description));
		book1.setAuthor(applicationContext.getString(R.string.c_author));
		book1.setLink(applicationContext.getString(R.string.c_link));
		book1.setPricing(generatePricing(book1));


		//Make C++ Book
		Book book2 = new Book();
		book2.setTitle(Book.BOOK_TITLE_C_PLUS);
		book2.setDescription(applicationContext.getString(R.string.c_plus_description));
		book2.setAuthor(applicationContext.getString(R.string.c_plus_author));
		book2.setLink(applicationContext.getString(R.string.c_plus_link));
		book2.setPricing(generatePricing(book2));


		//Make C# Book
		Book book3 = new Book();
		book3.setTitle(Book.BOOK_TITLE_C_PLUS);
		book3.setDescription(applicationContext.getString(R.string.c_sharp_description));
		book3.setAuthor(applicationContext.getString(R.string.c_sharp_author));
		book3.setLink(applicationContext.getString(R.string.c_sharp_link));
		book3.setPricing(generatePricing(book3));

		
		//Make Java Book
		Book book4 = new Book();
		book4.setTitle(Book.BOOK_TITLE_JAVA);
		book4.setDescription(applicationContext.getString(R.string.java_description));
		book4.setAuthor(applicationContext.getString(R.string.java_author));
		book4.setLink(applicationContext.getString(R.string.java_link));
		book4.setPricing(generatePricing(book4));

		
		//Make JavaScript Book
		Book book5 = new Book();
		book5.setTitle(Book.BOOK_TITLE_JAVA_SCRIPT);
		book5.setDescription(applicationContext.getString(R.string.javascript_descrption));
		book5.setAuthor(applicationContext.getString(R.string.javascript_author));
		book5.setLink(applicationContext.getString(R.string.javascript_link));
		book5.setPricing(generatePricing(book5));

		
		//Make Objective C Book
		Book book6 = new Book();
		book6.setTitle(Book.BOOK_TITLE_OBJECTIVE_C);
		book6.setDescription(applicationContext.getString(R.string.objectivec_description));
		book6.setAuthor(applicationContext.getString(R.string.objectivec_author));
		book6.setLink(applicationContext.getString(R.string.objectivec_link));
		book6.setPricing(generatePricing(book6));

		
		//Make Swift Book
		Book book7 = new Book();
		book7.setTitle(Book.BOOK_TITLE_SWIFT);
		book7.setDescription(applicationContext.getString(R.string.swift_description));
		book7.setAuthor(applicationContext.getString(R.string.swift_author));
		book7.setLink(applicationContext.getString(R.string.swift_link));
		book7.setPricing(generatePricing(book7));

		
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
		
		
		BookShopMapping bookShopMapping1 = new BookShopMapping();
		bookShopMapping1.setBook(book1);
		bookShopMapping1.setShop(shop1);
		

		
		BookShopMapping bookShopMapping2 = new BookShopMapping();
		bookShopMapping2.setBook(book2);
		bookShopMapping2.setShop(shop2);



		BookShopMapping bookShopMapping3 = new BookShopMapping();
		bookShopMapping3.setBook(book3);
		bookShopMapping3.setShop(shop3);


		BookShopMapping bookShopMapping4 = new BookShopMapping();
		bookShopMapping4.setBook(book4);
		bookShopMapping4.setShop(shop4);



		BookShopMapping bookShopMapping5 = new BookShopMapping();
		bookShopMapping5.setBook(book5);
		bookShopMapping5.setShop(shop5);



		BookShopMapping bookShopMapping6 = new BookShopMapping();
		bookShopMapping6.setBook(book6);
		bookShopMapping6.setShop(shop6);


		BookShopMapping bookShopMapping7 = new BookShopMapping();
		bookShopMapping7.setBook(book7);
		bookShopMapping7.setShop(shop7);
		
		try {

			String rawQuery = "SELECT ALCHOL_CONTENT, LESSION.DESCRIPTION FROM LESSION CROSS JOIN LESSION ON BOOK.TITLE = LESSION.NAME";

			book1.saveOrUpdate();
			book2.saveOrUpdate();
			book3.saveOrUpdate();
			book4.saveOrUpdate();
			book5.saveOrUpdate();
			book6.saveOrUpdate();
			book7.saveOrUpdate();
			
			shop1.saveOrUpdate();
			shop2.saveOrUpdate();
			shop3.saveOrUpdate();
			shop4.saveOrUpdate();
			shop5.saveOrUpdate();
			shop6.saveOrUpdate();
			shop7.saveOrUpdate();

			bookShopMapping1.saveOrUpdate();
			bookShopMapping2.saveOrUpdate();
			bookShopMapping3.saveOrUpdate();
			bookShopMapping4.saveOrUpdate();
			bookShopMapping5.saveOrUpdate();
			bookShopMapping6.saveOrUpdate();
			bookShopMapping7.saveOrUpdate();

			
			
			createCLessions(book1);
			createCPlusLessions(book2);
			createCSharpLessions(book3);
			createJavaLessions(book4);
			createJavaScriptLessions(book5);
			createObjecticeCLessions(book6);
			createSwiftLessions(book7);
			
			
		} catch(DatabaseException databaseException) {
			Log.error(DatabaseUtils.class.getName(), "createBooks", "DatabaseException caught while creating books, " + databaseException.getMessage());
		}
	}

	private void createCLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.C_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.c_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.c_first_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.C_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.c_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.c_second_lession_link));

		
		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(DatabaseUtils.class.getName(), "createGinBrands", "DatabaseException caught while creating gin brands, " + databaseException.getMessage());
		}
	}

	private void createCPlusLessions(Book book) {
		
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.C_PLUS_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.c_plus_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.c_plus_second_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.C_PLUS_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.c_plus_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.c_plus_second_lession_link));

		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createCPlusLessions", "DatabaseException caught while creating c plus lessions, " + databaseException.getMessage());
		}
	}

	private void createCSharpLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.C_SHARP_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.c_sharp_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.c_sharp_first_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.C_SHARP_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.c_sharp_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.c_sharp_second_lession_link));

		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createCSharpLessions", "DatabaseException caught while creating lessions, " + databaseException.getMessage());
		}
	}
	
	
	private void createJavaLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();

		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.JAVA_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.java_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.java_first_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.JAVA_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.java_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.java_second_lession_link));

		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createJavaLessions", "DatabaseException caught while creating lessions, " + databaseException.getMessage());
		}
	}
	
	
	private void createJavaScriptLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.JAVA_SCRIPT_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.javascript_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.javascript_first_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.JAVA_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.javascript_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.javascript_second_lession_link));

		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createJavaScriptLessions", "DatabaseException caught while creating lessions, " + databaseException.getMessage());
		}
	}
	
	

	private void createObjecticeCLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.OBJECTIVE_C_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.objectivec_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.objectivec_first_lession_link));

		
		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.OBJECTIVE_C_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.objectivec_first_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.objectivec_second_lession_link));

		try {
		 	firstLession.saveOrUpdate();
			firstLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createObjecticeCLessions", "DatabaseException caught while creating lessions, " + databaseException.getMessage());
		}
	}
	
	
	private void createSwiftLessions(Book book) {
		Context applicationContext = ResourceManager.getInstance().getApplicationContext();
		
		Lession firstLession = new Lession();
		firstLession.setBook(book);
		firstLession.setName(Lession.SWIFT_FIRST_LESSION);
		firstLession.setDescription(applicationContext.getString(R.string.swift_first_lession_description));
		firstLession.setLink(applicationContext.getString(R.string.swift_first_lession_link));

		Lession secondLession = new Lession();
		secondLession.setBook(book);
		secondLession.setName(Lession.SWIFT_SECOND_LESSION);
		secondLession.setDescription(applicationContext.getString(R.string.swift_second_lession_description));
		secondLession.setLink(applicationContext.getString(R.string.swift_second_lession_link));

		try {
			firstLession.saveOrUpdate();
			secondLession.saveOrUpdate();
		} catch(DatabaseException databaseException) {
			Log.error(getClass().getName(), "createSwiftLessions", "DatabaseException caught while creating lession, " + databaseException.getMessage());
		}
	}
	
	private Pricing generatePricing(Book book) {
		
		Pricing pricing = new Pricing();
		pricing.setBook(book);
		pricing.setPriceId(Utils.generateUniqueId());
		pricing.setPrice(100);
		pricing.setTax(10);
		pricing.setDiscount(10);
		
		return pricing;
	}
}
