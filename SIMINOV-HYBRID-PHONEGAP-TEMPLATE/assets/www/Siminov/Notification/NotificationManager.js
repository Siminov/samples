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



var NotificationManager = (function() {

	var notificationManager;
	
	return {
	
		getInstance : function() {
			if(notificationManager == null) {
				notificationManager = new NotificationManager();
				
				notificationManager.constructor = null;
			}
			
			return notificationManager;
		}
	
	}
	

	function NotificationManager() {
		
		this.doRegistration = function() {

		    var adapter = new Adapter();
		    adapter.setAdapterName(Constants.NOTIFICATION_ADAPTER);
		    adapter.setHandlerName(Constants.NOTIFICATION_ADAPTER_DO_REGISTRATION_HANDLER);
		
			adapter.invoke();				
		}
			
		this.doUnregistration = function() {

		    var adapter = new Adapter();
		    adapter.setAdapterName(Constants.NOTIFICATION_ADAPTER);
		    adapter.setHandlerName(Constants.NOTIFICATION_ADPATER_DO_UNREGISTRATION_HANDLER);
		
			adapter.invoke();				
		}
	}

		
}) ();


