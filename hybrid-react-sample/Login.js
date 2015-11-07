/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var LiquorList = require('./LiquorList');

var Siminov = require('./Siminov/Siminov');
var Callback = require('./Siminov/Callback');
var Database = require('./Siminov/Database/Database');


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



//var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
var SIHReactInterceptor = require('NativeModules').SIHReactInterceptor;

/*var subscription = RCTDeviceEventEmitter.addListener(
   'EventReminder',
   (reminder) => console.log('pranav')
);*/

var {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    Component,
    AlertIOS
} = React;

var Login = React.createClass({
    
    getInitialState: function() {
        return {
            username: '',
            password:''
        };
    },
    
    render: function() {
        return (
            <View style={styles.item}>
            <View style={styles.input}>
            <Text style={styles.label}>Username:</Text>
            <TextInput
            ref='Name'
            style={styles.usernameInput}
            placeholder="Enter user name"
            clearButtonMode="always"
            onChangeText={(username) => this.setState({username})}
            value={this.state.text}
            /*onEndEditing={this.clearAndRetainFocus}*//>
            </View>
            <View style={styles.input}>
            <Text style={styles.label}>Password:</Text>
            <TextInput password={true}
            ref='Password'
            style={styles.usernameInput}
            placeholder="Enter password"
            clearButtonMode="always"
            onChangeText={(password) => this.setState({password})}
            value={this.state.text}
            /*onEndEditing={this.clearAndRetainFocus}*//>
            </View>
            <TouchableHighlight style={styles.button} onPress={this.initialize} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Initialize</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this.moveToList} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            </View>
        );
    },
    
    initialize: function() {
                              
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
    },
                              
    moveToList: function() {
                        
        var me = this;
                              
        var credentialCallback = new Callback();
        credentialCallback.onExecute = function(transaction) {
                              
            var credentialSaveCallback = new Callback();
            credentialSaveCallback.onSuccess = function() {
                console.log('Credential Save Or Update Success');
            }
                              
            credential.saveOrUpdateAsync(credentialSaveCallback, transaction);
        }
                              
        credentialCallback.onSuccess = function() {
            console.log('Save Success');
                              
            getLiqs();
        }
                              
        credentialCallback.onError = function() {
            console.log('Save Error');
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
    
            var getLiquors = new GetLiquors();
            getLiquors.setService(GetLiquors.SERVICE_NAME);
            getLiquors.setRequest(GetLiquors.REQUEST_NAME);
            getLiquors.addResource("HOME", me);
                              
                              
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
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    baseText: {
        fontFamily: 'Cochin',
            },
        titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        marginTop: 40,
        padding: 40,
    },
    input: {
        paddingTop:10
    },
    label: {
        marginBottom: 5,
        fontSize: 1,
    },
    usernameInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        flex: 1,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 30,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

module.exports = Login;
