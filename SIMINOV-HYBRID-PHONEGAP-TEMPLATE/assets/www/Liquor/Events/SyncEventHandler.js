

function SyncEventHandler() {
	
	this.onSyncStarted = function(syncRequest) {
		alert("onSyncStarted: " + GetLiquors.UI_COMPONENT);
		var uiComponent = syncRequest.getResource(GetLiquors.UI_COMPONENT);
		uiComponent = eval("(" + uiComponent + ")");

		alert(uiComponent.properties());
		uiComponent();
	}

	
	this.onSyncQueued = function(syncRequest) {
		alert("onSyncQueued");
	}

	
	this.onSyncRemoved = function(syncRequest) {
		alert("onSyncRemoved");
	}

	
	this.onSyncTerminated = function(syncRequest) {
		alert("onSyncTerminated");
	}
}