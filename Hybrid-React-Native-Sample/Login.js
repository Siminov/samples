/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var BooksList = require('./BooksList');

var Siminov = require('siminov/Siminov');
var Callback = require('siminov/Callback');
var Database = require('siminov/Database/Database');


/*
 * Books Models
 */
var Book = require('./Book/Models/Book');
var Lession = require('./Book/Models/Lession');
var Credential = require('./Book/Models/Credential');

/*
 * Book Services
 */
var AddBook = require('./Book/Services/AddBook');
var DeleteBook = require('./Book/Services/DeleteBook');
var GetLessions = require('./Book/Services/GetLessions');
var GetBooks = require('./Book/Services/GetBooks');
var RegisterDevice = require('./Book/Services/RegisterDevice');
var UnregisterDevice = require('./Book/Services/UnregisterDevice');
var BookConstants = require('./Book/Constants');

/*
 * Book Reader Writter
 */
var LessionsReader = require('./Book/ReaderWritter/LessionsReader');
var BooksReader = require('./Book/ReaderWritter/BooksReader');


/*
 * Book Event Handler
 */
var DatabaseEventHandler = require('./Book/Events/DatabaseEventHandler');
var NotificationEventHandler = require('./Book/Events/NotificationEventHandler');
var SiminovEventHandler = require('./Book/Events/SiminovEventHandler');
var SyncEventHandler = require('./Book/Events/SyncEventHandler');



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
                              
                              
        if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST || BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
            Siminov.initializeAsync(callback);
        } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
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
                              
            getBks();
        }
                              
        credentialCallback.onError = function() {
            console.log('Save Error');
        }
                              
        var credential = new Credential();
        credential.setToken('si');
        credential.setAccountId('si');
                              
                              
        if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
            credential.saveOrUpdateAsync(credentialCallback);
        } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
                              
            var databaseDescriptorCallback = new Callback();
            databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
                Database.beginTransactionAsync(databaseDescriptor, credentialCallback);
            }
                              
            new Credential().getDatabaseDescriptorAsync(databaseDescriptorCallback);
        } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
                              
            try {
                credential.saveOrUpdate();
            } catch(e) {
                console.log('error while saving credential');
            }
                              
            getBks();
        }
                        

        function getBks() {
    
            var getBooks = new GetBooks();
            getBooks.setService(GetBooks.SERVICE_NAME);
            getBooks.setRequest(GetBooks.REQUEST_NAME);
            getBooks.addResource("HOME", me);
                              
                              
            var getBooksCallback = new Callback();
            getBooksCallback.onSuccess = function() {
                
            }
                              
            getBooksCallback.onFailure = function() {
                 console.log('get books error');
            }
                              
            if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST || BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
              getBooks.invokeAsync(getBooksCallback);
            } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
              getBooks.invoke();
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
