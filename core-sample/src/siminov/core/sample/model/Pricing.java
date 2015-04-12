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
	private double price;
	private double tax;
	private double discount;
	
	private LiquorBrand liquorBrand = null;
	
	//Methods
	
	public long getPriceId() {
		return this.priceId;
	}
	
	public void setPriceId(long priceId) {
		this.priceId = priceId;
	}
	
	public double getPrice() {
		return this.price;
	}
	
	public void setPrice(double price) {
		this.price = price;
	}
	
	public double getTax() {
		return this.tax;
	}
	
	public void setTax(double tax) {
		this.tax = tax;
	}
	
	public double getDiscount() {
		return this.discount;
	}
	
	public void setDiscount(double discount) {
		this.discount = discount;
	}
	
	public LiquorBrand getLiquorBrand() {
		return this.liquorBrand;
	}
	
	public void setLiquorBrand(LiquorBrand liquorBrand) {
		this.liquorBrand = liquorBrand;
	}
	
}
