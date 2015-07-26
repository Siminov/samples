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
	
	private LiquorBrand liquorBrand = null;
	
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
	
	public LiquorBrand getLiquorBrand() {
		return this.liquorBrand;
	}
	
	public void setLiquorBrand(LiquorBrand liquorBrand) {
		this.liquorBrand = liquorBrand;
	}
	
}
