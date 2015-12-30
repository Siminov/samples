/**
 * [SIMINOV FRAMEWORK]
 * Copyright [2014-2016] [Siminov Software Solution LLP|support@siminov.com]
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


package siminov.core.sample;

import java.util.Hashtable;

public class StateManager {

	private static StateManager stateManager = null;
	private Hashtable<String, Object> stateList = null;
	
	public static final String ACTIVE_FRAGMENT = "ACTIVE_FRAGMENT";
	
	private StateManager() {
		stateList = new Hashtable<String, Object>();
	}
	
	public static final StateManager getInstance() {
		if(stateManager == null) {
			stateManager = new StateManager();
		}

		return stateManager;
	}
	
	public void putState(String key, Object value) {
		if(value == null) {
			return;
		}
		
		stateList.put(key, value);
	}
	
	public Object getState(String key) {
		return stateList.get(key);
	}
}
