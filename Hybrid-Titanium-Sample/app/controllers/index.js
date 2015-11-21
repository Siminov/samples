function showLiquorList(e) {
    
    var args = arguments[0] || {};
	
	var liquorList = Alloy.createController("liquorList", args).getView();
	
    if (OS_IOS) {
        liquorList.open();
    }
    if (OS_ANDROID) {
        liquorList.open();
    } 
}

$.index.open();