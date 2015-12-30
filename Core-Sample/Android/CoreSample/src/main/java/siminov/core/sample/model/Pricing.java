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

package siminov.core.sample.model;

public class Pricing {

	//Table Name
	public static final String TABLE_NAME = "PRICING";	
	
	//Column Names
	public static final String PRICE_ID = "PRICE_ID";
	public static final String PRICE = "PRICE";
	public static final String TAX = "TAX";
	public static final String DISCOUNT = "DISCOUNT";
	
	
	//Variables
	private long priceId;
	private float price;
	private float tax;
	private float discount;
	
	private Book book = null;
	
	//Methods
	
	public long getPriceId() {
		return this.priceId;
	}
	
	public void setPriceId(long priceId) {
		this.priceId = priceId;
	}
	
	public float getPrice() {
		return this.price;
	}
	
	public void setPrice(float price) {
		this.price = price;
	}
	
	public float getTax() {
		return this.tax;
	}
	
	public void setTax(float tax) {
		this.tax = tax;
	}
	
	public float getDiscount() {
		return this.discount;
	}
	
	public void setDiscount(float discount) {
		this.discount = discount;
	}
	
	public Book getBook() {
		return this.book;
	}
	
	public void setBook(Book book) {
		this.book = book;
	}
	
}
