var testTitanium = null;

var myLiquors = Alloy.Collections.liquors;
 
var gin = Alloy.createModel('liquors',{
	liquorName: 'Gin',
	liquorDescription: 'Gin is a spirit made of juniper berries.'	
});
 
myLiquors.add(gin);
gin.save();

var rum = Alloy.createModel('liquors',{
	liquorName: 'Rum',
	liquorDescription: 'Rum is a distilled liquid made of juniper berries.'	
});
 
myLiquors.add(rum);
rum.save();

var tequilla = Alloy.createModel('liquors',{
	liquorName: 'Tequilla',
	liquorDescription: 'Tequilla is a spirit made of blue agave.'	
});
 
myLiquors.add(tequilla);
tequilla.save();

var vodka = Alloy.createModel('liquors',{
	liquorName: 'Vodka',
	liquorDescription: 'Vodka is a colorless liquid.'	
});
 
myLiquors.add(vodka);
vodka.save();

function showLiquorDetail(event) {
	var test = require('hybrid.titanium.module');
	Ti.API.info("module is => " + test);
	//alert(test.example());
	
	test.timedEvent("openCrust 2.0.27", function(result) {
		alert(result);
	});
	
	var selectedLiquor = event.source;
    var args = {
        liquorName: selectedLiquor.title,
        liquorDescription: selectedLiquor.liquorDescription
    };
    
    var liquorDetailView = Alloy.createController("liquorDetails", args).getView();
    if (OS_IOS) {
        $.liquorList.openWindow(liquorDetailView);
        //liquorDetailView.open();
    }
    if (OS_ANDROID) {
        liquorDetailView.open();
    } 
}