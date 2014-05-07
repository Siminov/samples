
function SiminovEventHandler() {

    this.onFirstTimeSiminovInitialized = function() {
        initialize();
    }


    this.onSiminovInitialized = function() {
        initialize();
    }


    this.onSiminovStopped = function() {
        exitApp();
    }

}
