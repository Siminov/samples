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

package siminov.core.sample.model;

import siminov.core.database.Database;

public class Shop extends Database {

	//Table Name
	transient public static final String TABLE_NAME = "SHOP";	
		
	//Column Names 
	transient public static final String SHOP_ID = "SHOP_ID";
	transient public static final String NAME = "NAME";
	transient public static final String ADDRESS = "ADDRESS";
	
	//Variables
	private long shopId;
	private String name;
	private String address;
	
	
	public long getShopId() {
		return this.shopId;
	}
	
	public void setShopId(long shopId) {
		this.shopId = shopId;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getAddress() {
		return this.address;
	}
	
	public void setAddress(String address) {
		this.address = address;
	}
	
}
