/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2013] [Siminov Software Solution|support@siminov.com]
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

package siminov.orm.template.events;

import siminov.orm.events.IDatabaseEvents;
import siminov.orm.model.DatabaseDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor;
import siminov.orm.model.DatabaseMappingDescriptor.Index;

public class DatabaseEventHandler implements IDatabaseEvents {

	public void databaseCreated(DatabaseDescriptor databaseDescriptor) {
		System.out.print("");
	}

	public void tableCreated(DatabaseDescriptor databaseDescriptor, DatabaseMappingDescriptor databaseMapping) {
		System.out.print("");
	}

	public void indexCreated(DatabaseDescriptor databaseDescriptor, DatabaseMappingDescriptor databaseMapping, Index index) {
		System.out.print("");
	}

	public void databaseDropped(DatabaseDescriptor databaseDescriptor) {
		// TODO Auto-generated method stub
	}

	public void tableDropped(DatabaseDescriptor databaseDescriptor, DatabaseMappingDescriptor databaseMapping) {
		// TODO Auto-generated method stub
	}

	public void indexDropped(DatabaseDescriptor databaseDescriptor, DatabaseMappingDescriptor databaseMapping, Index index) {
		// TODO Auto-generated method stub
	}

}
