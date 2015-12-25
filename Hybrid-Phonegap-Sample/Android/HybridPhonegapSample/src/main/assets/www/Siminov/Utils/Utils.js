
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
    module.exports = Utils;
}


function Utils() {

}


Utils.uniqueNumber = function() {

	var date = Date.now();
    
    // If created at same millisecond as previous
    if (date <= Utils.uniqueNumberPrevious) {
        date = ++Utils.uniqueNumberPrevious;
    } else {
        Utils.uniqueNumberPrevious = date;
    }
    
    return date.toString();
}


Utils.uniqueNumberPrevious = 0;