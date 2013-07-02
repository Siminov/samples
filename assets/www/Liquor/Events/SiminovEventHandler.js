
function SiminovEventHandler() {

    this.firstTimeSiminovInitialized = function() {
//        alert("firstTimeSiminovInitialized");

		new DatabaseUtils().prepareData();

        initialize();
    }


    this.siminovInitialized = function() {
        initialize();
    }


    this.siminovStopped = function() {
        exitApp();
    }

}
