var observable = require("data/observable");

var dialogs = require("ui/dialogs");

//var Siminov = require('./Siminov/Siminov');
//var Callback = require('./Siminov/Callback');
//var Database = require('./Siminov/Database/Database');


var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.counter = 42;
        this.set("message", this.counter + " taps left");
    }

    HelloWorldModel.prototype.tapLogin = function () {

	var path = 'Siminov';
	var Siminov = require(path);

	/*
	 * Liquor Models
 	 */
	var Liquor = require('Liquor/Models/Liquor');
	var LiquorBrand = require('Liquor/Models/LiquorBrand');
	var Credential = require('Liquor/Models/Credential');

	/*
	 * Liquor Services
	 */
	var AddLiquor = require('Liquor/Services/AddLiquor');
	var DeleteLiquor = require('Liquor/Services/DeleteLiquor');
	var GetLiquorBrands = require('Liquor/Services/GetLiquorBrands');
	var GetLiquors = require('Liquor/Services/GetLiquors');
	var RegisterDevice = require('Liquor/Services/RegisterDevice');
	var UnregisterDevice = require('Liquor/Services/UnregisterDevice');
	var LiquorConstants = require('Liquor/Constants');

	/*
	 * Liquor Reader Writter
	 */
	var LiquorBrandsReader = require('Liquor/ReaderWritter/LiquorBrandsReader');
	var LiquorsReader = require('Liquor/ReaderWritter/LiquorsReader');


	/*
	 * Liquor Event Handler
	 */
	var DatabaseEventHandler = require('Liquor/Events/DatabaseEventHandler');
	var NotificationEventHandler = require('Liquor/Events/NotificationEventHandler');
	var SiminovEventHandler = require('Liquor/Events/SiminovEventHandler');
	var SyncEventHandler = require('Liquor/Events/SyncEventHandler');


	//dialogs.alert("Login").then(function() {
  	
	//});
    };

    HelloWorldModel.prototype.tapInitialize = function () {
    };
    return HelloWorldModel;
})(observable.Observable);
exports.HelloWorldModel = HelloWorldModel;
exports.mainViewModel = new HelloWorldModel();
