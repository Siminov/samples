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
import java.util.ArrayList;

import siminov.orm.annotation.Column;
import siminov.orm.annotation.ColumnProperty;
import siminov.orm.annotation.Index;
import siminov.orm.annotation.IndexColumn;
import siminov.orm.annotation.Indexes;
import siminov.orm.annotation.OneToMany;
import siminov.orm.annotation.RelationshipProperty;
import siminov.orm.annotation.Table;
import siminov.orm.database.Database;

@Indexes({
	@Index(name="LIQUOR_INDEX_BASED_ON_LINK", unique=true, value={
		@IndexColumn(column=Liquor.LINK)
	}), 
})
public class Liquor extends Database implements Serializable {

	//Table Name
	transient public static final String TABLE_NAME = "LIQUOR";	
	
	//Column Names
	transient public static final String LIQUOR_TYPE = "LIQUOR_TYPE";
	transient public static final String DESCRIPTION = "DESCRIPTION";
	transient public static final String HISTORY = "HISTORY";
	transient public static final String LINK = "LINK";
	transient public static final String ALCHOL_CONTENT = "ALCHOL_CONTENT";
	
	//Liquor Types 
	transient public static final String LIQUOR_TYPE_GIN = "Gin"; 
	transient public static final String LIQUOR_TYPE_RUM = "Rum"; 
	transient public static final String LIQUOR_TYPE_TEQUILA = "Tequila"; 
	transient public static final String LIQUOR_TYPE_VODKA = "Vodka"; 
	transient public static final String LIQUOR_TYPE_WHISKEY = "Whiskey"; 
	transient public static final String LIQUOR_TYPE_BEER = "Beer"; 
	transient public static final String LIQUOR_TYPE_WINE = "Wine";
	
	
	//Variables
	
	@Column(columnName=LIQUOR_TYPE,
			properties={
				@ColumnProperty(name=ColumnProperty.PRIMARY_KEY, value="true"),
				@ColumnProperty(name=ColumnProperty.NOT_NULL, value="true"), 
				@ColumnProperty(name=ColumnProperty.UNIQUE, value="true")
				})
	private String liquorType = null;
	
	@Column(columnName=DESCRIPTION)
	private String description = null;
	
	@Column(columnName=HISTORY)
	private String history = null;

	@Column(columnName=LINK,
			properties={
				@ColumnProperty(name=ColumnProperty.DEFAULT, value="www.wikipedia.org")
				})
	private String link = null;
	
	@Column(columnName=ALCHOL_CONTENT)
	private String alcholContent = null;

	@OneToMany(onUpdate="cascade", onDelete="cascade", 
			properties={
				@RelationshipProperty(name=RelationshipProperty.LOAD, value="true")
		})
	private ArrayList<LiquorBrand> liquorBrands = null;
	
	//Methods
	
	public String getLiquorType() {
		return this.liquorType;
	}
	
	public void setLiquorType(String liquorType) {
		this.liquorType = liquorType;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getHistory() {
		return this.history;
	}
	
	public void setHistory(String history) {
		this.history = history;
	}
	
	public String getLink() {
		return this.link;
	}
	
	public void setLink(String link) {
		this.link = link;
	}
	
	public String getAlcholContent() {
		return this.alcholContent;
	}
	
	public void setAlcholContent(String alcholContent) {
		this.alcholContent = alcholContent;
	}

	public ArrayList<LiquorBrand> getLiquorBrands() {
		return this.liquorBrands;
	}
	
	public void setLiquorBrands(ArrayList<LiquorBrand> liquorBrands) {
		this.liquorBrands = liquorBrands;
	}
}
