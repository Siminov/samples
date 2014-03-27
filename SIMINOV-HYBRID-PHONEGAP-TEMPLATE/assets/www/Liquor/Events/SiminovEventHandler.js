
function SiminovEventHandler() {

    this.onFirstTimeSiminovInitialized = function() {

		new DatabaseUtils().prepareData();

        initialize();
    }


    this.onSiminovInitialized = function() {
        initialize();
    }


    this.onSiminovStopped = function() {
        exitApp();
    }

}
