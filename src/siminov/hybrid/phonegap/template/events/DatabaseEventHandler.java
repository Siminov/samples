package siminov.hybrid.phonegap.template.events;

import siminov.orm.events.IDatabaseEvents;
import siminov.orm.model.DatabaseDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor.Index;

public class DatabaseEventHandler implements IDatabaseEvents {

	public void databaseCreated(DatabaseDescriptor databaseDescriptor) {
		System.out.print("");
	}

	public void databaseDropped(DatabaseDescriptor databaseDescriptor) {
		System.out.print("");
	}

	public void tableCreated(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping) {
		System.out.print("");
	}

	public void tableDropped(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping) {
		System.out.print("");
	}

	public void indexCreated(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping, Index index) {
		System.out.print("");
	}

	public void indexDropped(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping, Index index) {
		System.out.print("");		
	}

}