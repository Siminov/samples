/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
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

package siminov.web.phonegap.sample.events;

import siminov.core.events.IDatabaseEvents;
import siminov.core.model.DatabaseDescriptor;
import siminov.core.model.DatabaseMappingDescriptor;
import siminov.core.model.DatabaseMappingDescriptor.Index;

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