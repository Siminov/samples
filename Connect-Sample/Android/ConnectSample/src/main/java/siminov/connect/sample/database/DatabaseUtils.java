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


package siminov.connect.sample.database;

import siminov.core.exception.DatabaseException;
import siminov.core.log.Log;
import siminov.core.resource.ResourceManager;
import siminov.connect.sample.R;
import siminov.connect.sample.model.Book;
import siminov.connect.sample.model.Lession;
import siminov.connect.utils.Utils;
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


		//Make C++ Book
		Book book2 = new Book();
		book2.setTitle(Book.BOOK_TITLE_C_PLUS);
		book2.setDescription(applicationContext.getString(R.string.c_plus_description));
		book2.setAuthor(applicationContext.getString(R.string.c_plus_author));
		book2.setLink(applicationContext.getString(R.string.c_plus_link));


		//Make C# Book
		Book book3 = new Book();
		book3.setTitle(Book.BOOK_TITLE_C_PLUS);
		book3.setDescription(applicationContext.getString(R.string.c_sharp_description));
		book3.setAuthor(applicationContext.getString(R.string.c_sharp_author));
		book3.setLink(applicationContext.getString(R.string.c_sharp_link));


		//Make Java Book
		Book book4 = new Book();
		book4.setTitle(Book.BOOK_TITLE_JAVA);
		book4.setDescription(applicationContext.getString(R.string.java_description));
		book4.setAuthor(applicationContext.getString(R.string.java_author));
		book4.setLink(applicationContext.getString(R.string.java_link));


		//Make JavaScript Book
		Book book5 = new Book();
		book5.setTitle(Book.BOOK_TITLE_JAVA_SCRIPT);
		book5.setDescription(applicationContext.getString(R.string.javascript_descrption));
		book5.setAuthor(applicationContext.getString(R.string.javascript_author));
		book5.setLink(applicationContext.getString(R.string.javascript_link));


		//Make Objective C Book
		Book book6 = new Book();
		book6.setTitle(Book.BOOK_TITLE_OBJECTIVE_C);
		book6.setDescription(applicationContext.getString(R.string.objectivec_description));
		book6.setAuthor(applicationContext.getString(R.string.objectivec_author));
		book6.setLink(applicationContext.getString(R.string.objectivec_link));


		//Make Swift Book
		Book book7 = new Book();
		book7.setTitle(Book.BOOK_TITLE_SWIFT);
		book7.setDescription(applicationContext.getString(R.string.swift_description));
		book7.setAuthor(applicationContext.getString(R.string.swift_author));
		book7.setLink(applicationContext.getString(R.string.swift_link));

		try {

			String rawQuery = "SELECT ALCHOL_CONTENT, LESSION.DESCRIPTION FROM LESSION CROSS JOIN LESSION ON BOOK.TITLE = LESSION.NAME";

			book1.saveOrUpdate();
			book2.saveOrUpdate();
			book3.saveOrUpdate();
			book4.saveOrUpdate();
			book5.saveOrUpdate();
			book6.saveOrUpdate();
			book7.saveOrUpdate();


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
}
