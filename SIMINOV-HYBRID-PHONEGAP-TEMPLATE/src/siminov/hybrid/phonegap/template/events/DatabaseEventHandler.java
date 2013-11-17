package siminov.hybrid.phonegap.template.events;

import siminov.orm.events.IDatabaseEvents;
import siminov.orm.model.DatabaseDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor.Index;

public class DatabaseEventHandler implements IDatabaseEvents {

	public void onDatabaseCreated(DatabaseDescriptor databaseDescriptor) {
		System.out.print("");
	}

	public void onDatabaseDropped(DatabaseDescriptor databaseDescriptor) {
		System.out.print("");
	}

	public void onTableCreated(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping) {
		System.out.print("");
	}

	public void onTableDropped(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping) {
		System.out.print("");
	}

	public void onIndexCreated(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping, Index index) {
		System.out.print("");
	}

	public void onIndexDropped(DatabaseDescriptor databaseDescriptor,
			DatabaseMappingDescriptor databaseMapping, Index index) {
		System.out.print("");		
	}

}