package siminov.core.sample.model;

import siminov.core.database.Database;

public class LiquorShopMapping extends Database {

	//Table Name
	transient public static final String TABLE_NAME = "LIQUOR_SHOP_MAPPING";
	
	//Variable Names
	private Liquor liquor = null;
	private Shop shop = null;
	
	
	//Method Names
	
	public Liquor getLiquor() {
		return this.liquor;
	}
	
	public void setLiquor(Liquor liquor) {
		this.liquor = liquor;
	}
	
	public Shop getShop() {
		return this.shop;
	}
	
	public void setShop(Shop shop) {
		this.shop = shop;
	}
}
