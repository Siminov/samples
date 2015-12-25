
var win;
var dom;

try {

    if(!window) {
    	window = global || window;
    }

	win = window;
	dom = window['document'];
} catch(e) {
	win = Ti.App.Properties;
}


if(dom == undefined) {
    module.exports = Callback;
}


function Callback() {

	this.onSuccess;
	
	this.onFailure;
	
	
	this.onExecute;
}