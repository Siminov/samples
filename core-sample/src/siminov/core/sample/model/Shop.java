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
