
var win;
var dom;

try {
	window = global || window;	
	win = window;
	dom = window['document'];
} catch(e) {
	win = Ti.App.Properties;
}


var Siminov = require('Siminov/Siminov');
var Callback = require('./Siminov/Callback');
var Database = require('./Siminov/Database/Database');
var Log = require('./Siminov/Log/Log');


/*
 * Liquor Models
 */
var Liquor = require('./Liquor/Models/Liquor');
var LiquorBrand = require('./Liquor/Models/LiquorBrand');
var Credential = require('./Liquor/Models/Credential');

/*
 * Liquor Services
 */
var AddLiquor = require('./Liquor/Services/AddLiquor');
var DeleteLiquor = require('./Liquor/Services/DeleteLiquor');
var GetLiquorBrands = require('./Liquor/Services/GetLiquorBrands');
var GetLiquors = require('./Liquor/Services/GetLiquors');
var RegisterDevice = require('./Liquor/Services/RegisterDevice');
var UnregisterDevice = require('./Liquor/Services/UnregisterDevice');
var LiquorConstants = require('./Liquor/Constants');

/*
 * Liquor Reader Writter
 */
var LiquorBrandsReader = require('./Liquor/ReaderWritter/LiquorBrandsReader');
var LiquorsReader = require('./Liquor/ReaderWritter/LiquorsReader');


/*
 * Liquor Event Handler
 */
var DatabaseEventHandler = require('./Liquor/Events/DatabaseEventHandler');
var NotificationEventHandler = require('./Liquor/Events/NotificationEventHandler');
var SiminovEventHandler = require('./Liquor/Events/SiminovEventHandler');
var SyncEventHandler = require('./Liquor/Events/SyncEventHandler');


function showHome() {
	
	var credentialCallback = new Callback();
    credentialCallback.onExecute = function(transaction) {
        Log.debug('index', 'credentialCallback.onExecute', 'onexecute');
        
        var credentialSaveCallback = new Callback();
        credentialSaveCallback.onSuccess = function() {
            Log.debug('index', 'credentialCallback.onExecute', 'Credential Save Or Update Success');
        }
                          
        credential.saveOrUpdateAsync(credentialSaveCallback, transaction);
    }
                          
    credentialCallback.onSuccess = function() {
        Log.debug('index', 'credentialCallback.onSuccess', 'Save Success');
                      
		setTimeout(
	        getLiqs,
			1000
		);                 
    }
                          
    credentialCallback.onError = function() {
        console.log('Save Error');
        alert('save error');
    }
                          
    var credential = new Credential();
    credential.setToken('si');
    credential.setAccountId('si');
                          
                          
    if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
        credential.saveOrUpdateAsync(credentialCallback);
    } else if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
                          
        var databaseDescriptorCallback = new Callback();
        databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
            Database.beginTransactionAsync(databaseDescriptor, credentialCallback);
        }
                          
        new Credential().getDatabaseDescriptorAsync(databaseDescriptorCallback);
    } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
                          
        try {
            credential.saveOrUpdate();
        } catch(e) {
            console.log('error while saving credential');
        }
                          
        getLiqs();
    }
                    

    function getLiqs() {
		
		var args = arguments[0] || {};
		
		//var liquorList = Alloy.createController("liquorList", args).getView();
	   
        var getLiquors = new GetLiquors();
        getLiquors.setService(GetLiquors.SERVICE_NAME);
        getLiquors.setRequest(GetLiquors.REQUEST_NAME);
        //getLiquors.addResource("HOME", liquorList);
                          
                          
        var getLiquorsCallback = new Callback();
        getLiquorsCallback.onSuccess = function() {
            
        }
                          
        getLiquorsCallback.onFailure = function() {
             console.log('get liquors error');
        }
                          
        if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST || LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
          getLiquors.invokeAsync(getLiquorsCallback);
        } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
          getLiquors.invoke();
        }
    }
}


function doInitialize() {
    
    
    Ti.API.log('calling initialize');
    
    var callback = new Callback();
    callback.onSuccess = function() {
        console.log('async initialized');
    }
                          
                          
    if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST || LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
        Siminov.initializeAsync(callback);
    } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
        Siminov.initialize();
        console.log('sync initialized');
    }

}

$.index.open();