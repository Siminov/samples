/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution LLP|support@siminov.com]
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

package siminov.orm.template.model;

import java.io.Serializable;

import siminov.orm.annotation.Column;
import siminov.orm.annotation.ColumnProperty;
import siminov.orm.annotation.ManyToOne;
import siminov.orm.annotation.RelationshipProperty;
import siminov.orm.database.Database;

public class LiquorBrand extends Database implements Serializable {

	//Table Name
	public static final String TABLE_NAME = "LIQUOR_BRAND";	
	
	//Column Names
	public static final String LIQUOR_TYPE = "LIQUOR_TYPE";
	public static final String BRAND_NAME = "BRAND_NAME";
	public static final String DESCRIPTION = "DESCRIPTION";
	public static final String LINK = "LINK";
	public static final String COUNTRY = "COUNTRY";
	
	//Brands
	
	/*
	 * Gin Brands
	 */
	public static final String GIN_BRAND_THE_BOTANIST = "The Botanist";             
	public static final String GIN_BRAND_TANQUERAY = "Tanqueray";
	
	
	/*
	 * Rum Brands
	 */
	public static final String RUM_BRAND_BACARDI = "Bacardi";
	public static final String RUM_BRAND_OLD_MONK = "Old Monk";

	
	/*
	 * Tequila Brands
	 */
	public static final String TEQUILA_BRAND_PATRON = "Patron";
	public static final String TEQUILA_BRAND_SAUZA = "Sauza";

	
	/*
	 * Vodka Brands
	 */
	public static final String VODKA_BRAND_SMIRNOFF = "Smirnoff";
	public static final String VODKA_BRAND_ABSOLUT = "";
	
	
	//Whiskey - Bourbons Brands
	public static final String WHISKEY_BRAND_JOHNNIE_WALKER = "Johnnie Walker";
	public static final String WHISKEY_BRAND_JACK_DANIELS = "Jack Daniels";
	

	//Beer Brands
	public static final String BEER_BRAND_KINGFISHER = "Kingfisher";
	public static final String BEER_BRAND_HEINEKEN = "Heineken";
	
	
	//Wine Brands 
	public static final String WINE_BRAND_YELLOW_TAIL = "Yellow Tail";
	public static final String WINE_BRAND_GALLO = "Gallo";
	
	
	//Variables

	@ManyToOne(onUpdate="cascade", onDelete="cascade", 
			properties={
				@RelationshipProperty(name=RelationshipProperty.LOAD, value="true")
		})
	private Liquor liquor = null;
	
	@Column(columnName=BRAND_NAME,
			properties={
				@ColumnProperty(name=ColumnProperty.PRIMARY_KEY, value="true"),
				@ColumnProperty(name=ColumnProperty.NOT_NULL, value="true"), 
				@ColumnProperty(name=ColumnProperty.UNIQUE, value="true")
				})
	private String brandName = null;

	@Column(columnName=DESCRIPTION)
	private String description = null;
	
	@Column(columnName=LINK,
			properties={
				@ColumnProperty(name=ColumnProperty.DEFAULT, value="www.wikipedia.org")
				})
	private String link = null;

	@Column(columnName=COUNTRY)
	private String country = null;

	//Methods 
	
	public Liquor getLiquor() {
		return this.liquor;
	}
	
	public void setLiquor(Liquor liquor) {
		this.liquor = liquor;
	}
	
	public String getBrandName() {
		return this.brandName;
	}
	
	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getLink() {
		return this.link;
	}
	
	public void setLink(String link) {
		this.link = link;
	}
	
	public String getCountry() {
		return this.country;
	}
	
	public void setCountry(String country) {
		this.country = country;
	}
}
