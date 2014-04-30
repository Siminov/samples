package siminov.connect.template.reader;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;

import siminov.connect.template.Constants;
import siminov.connect.template.model.Liquor;
import siminov.orm.exception.DeploymentException;
import siminov.orm.log.Log;
import siminov.orm.reader.SiminovSAXDefaultHandler;

public class LiquorsReader extends SiminovSAXDefaultHandler implements Constants {

	private Collection<Liquor> liquors = new ArrayList<Liquor>();
	private Liquor liquor = null;
	
	
	private StringBuilder tempValue = new StringBuilder();

	
	public LiquorsReader(InputStream data) {
		
		if(data == null) {
			return;
		}
		
		
		try {
			parseMessage(data);
		} catch(Exception exception) {
			Log.loge(getClass().getName(), "Constructor", "Exception caught while parsing Liquors, " + exception.getMessage());
			throw new DeploymentException(getClass().getName(), "Constructor", "Exception caught while parsing Liquors, " + exception.getMessage());
		}
	}

	public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
		super.startElement(uri, localName, qName, attributes);
		
		tempValue = new StringBuilder();
		
		if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR)) {
			liquor = new Liquor();
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
		
		if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR)) {
			liquors.add(liquor);
		} else if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR_NAME)) {
			liquor.setLiquorType(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR_DESCRIPTION)) {
			liquor.setDescription(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR_HISTROY)) {
			liquor.setHistory(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR_LINK)) {
			liquor.setLink(tempValue.toString());
		} else if(localName.equalsIgnoreCase(GET_LIQUORS_WS_LIQUOR_ALCHOL_CONTENT)) {
			liquor.setAlcholContent(tempValue.toString());
		}
	}
	
	public Iterator<Liquor> getLiquors() {
		return this.liquors.iterator();
	}
}
