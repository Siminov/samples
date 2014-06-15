

function SyncEventHandler() {
	
	this.onSyncStarted = function(syncRequest) {
		alert("onSyncStarted");
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