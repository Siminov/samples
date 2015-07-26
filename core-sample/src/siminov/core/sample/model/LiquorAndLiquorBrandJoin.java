package siminov.core.sample.model;

import siminov.core.database.Database;

public class LiquorAndLiquorBrandJoin extends Database {

	private String alcholContent = null;
	private String description = null;
	
	public String getAlcholContent() {
		return this.alcholContent;
	}
	
	public void setAlcholContent(String alcholContent) {
		this.alcholContent = alcholContent;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}
	
}
