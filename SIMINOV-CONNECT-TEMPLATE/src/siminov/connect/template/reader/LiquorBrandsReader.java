package siminov.connect.template.reader;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;

import siminov.connect.template.Constants;
import siminov.connect.template.model.LiquorBrand;
import siminov.orm.exception.DeploymentException;
import siminov.orm.log.Log;
import siminov.orm.reader.SiminovSAXDefaultHandler;

public class LiquorBrandsReader extends SiminovSAXDefaultHandler implements Constants {

	private Collection<LiquorBrand> liquorBrands = new ArrayList<LiquorBrand>();
	private LiquorBrand liquorBrand = null;
	
	
	private StringBuilder tempValue = new StringBuilder();

	
	public LiquorBrandsReader(InputStream data) {

		if(data == null) {
			return;
		}
		
		
		try {
			parseMessage(data);
		} catch(Exception exception) {
			Log.error(getClass().getName(), "Constructor", "Exception caught while parsing Liquor Brands, " + exception.getMessage());
			throw new DeploymentException(getClass().getName(), "Constructor", "Exception caught while parsing Liquor Brands, " + exception.getMessage());
		}
	}

	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		super.startElement(uri, localName, qName, attributes);
		
		tempValue = new StringBuilder();
		
		if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND)) {
			liquorBrand = new LiquorBrand();
		}
	}
	
	public void characters(char[] ch, int start, int length) throws SAXException {
		super.characters(ch, start, length);
		
		String value = new String(ch,start,length);
		
		if(value == null || value.length() <= 0 || value.equalsIgnoreCase(NEW_LINE)) {
			return;
		}
		
		value = value.trim();
		tempValue.append(value);
	}

	public void endElement(String uri, String localName, String qName) throws SAXException {
		super.endElement(uri, localName, qName);
		
		if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND)) {
			liquorBrands.add(liquorBrand);
		} else if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND_NAME)) {
			liquorBrand.setBrandName(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND_COUNTRY)) {
			liquorBrand.setCountry(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND_DESCRIPTION)) {
			liquorBrand.setDescription(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUOR_BRANDS_WS_BRAND_LINK)) {
			liquorBrand.setLink(tempValue.toString());
		}
	}
	
	public Iterator<LiquorBrand> getLiquorBrands() {
		return this.liquorBrands.iterator();
	}
}
