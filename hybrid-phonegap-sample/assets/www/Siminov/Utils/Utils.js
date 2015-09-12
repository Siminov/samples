

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
    
    return date;
}


Utils.uniqueNumberPrevious = 0;