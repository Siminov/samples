
function SiminovEventHandler() {

    this.onFirstTimeSiminovInitialized = function() {
    	alert("onFirstTimeSiminovInitialized");
		new DatabaseUtils().prepareData();

        initialize();
    }


    this.onSiminovInitialized = function() {
    	alert("onSiminovInitialized");
        initialize();
    }


    this.onSiminovStopped = function() {
        exitApp();
    }

}
