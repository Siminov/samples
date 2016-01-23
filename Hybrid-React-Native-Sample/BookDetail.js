/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');

var Callback = require('siminov/Callback');
var Log = require('siminov/Log/Log');
var Database = require('siminov/Database/Database');

var BookConstants = require('./Book/Constants');

var Lession = require('./Book/Models/Lession');

var {
    StyleSheet,
    Text,
    View,
    Component,
    Image,
    ScrollView
} = React;

var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    },
    scrollview: {
        height: 740,
        backgroundColor: "#FFFFFF"
    },
    hero: {
        //flexDirection: "row",
        alignItems: "center",
    },
    heroImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10
    },
    heroTextBox: {
        //flexDirection: "column"
    },
    companyName: {
        color: "#888888"
    },
    item: {
        marginTop: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#DDDDDD",
    },
    label: {
        color: "#007AFF",
        marginBottom: 5
    },
});

class BookDetail extends Component {
  
    render() {
        
        var book = this.props.book;
        var description = (typeof book.getDescription() !== 'undefined') ? book.getDescription() : '';
        var author = (typeof book.getAuthor() !== 'undefined') ? book.getAuthor() : '';
        var link = (typeof book.getLink() !== 'undefined') ? author.getLink() : '';

        var lessions;
      
        var callback = new Callback();
        callback.onExecute = function(transaction) {
        
          var getLessions = new Callback();
          getLessions.onSuccess = function(getLessions) {
            lesisons = getLessions;
          }
        
          new Lession().select().where('TITLE').equalTo(book.getTitle()).executeAsync(getLessions, transaction);
        }
      
        callback.onSuccess = function(savedLessions) {
          Log.debug("Home", "populateDetail", "Get Lessions Success: " + savedLessions);
        
          if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
            lessions = savedLessions;
          }
        
          loadLessions();
        }
      
        callback.onFailure = function() {
          console.log('get sessions error');
        }
      
      
        if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
          new Lession().select().where('TITLE').equalTo(book.getTitle()).executeAsync(callback);
        } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
          
          var databaseDescriptorCallback = new Callback();
          databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
              Database.beginTransactionAsync(databaseDescriptor, callback);
          }
          
          new Lession().getDatabaseDescriptorAsync(databaseDescriptorCallback);
        } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
          sessions = new Lession().select().where('TITLE').equalTo(book.getTitle()).execute();
          loadLessions();
        }
      
        function loadLessions() {
        
        }
      
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.hero}>
                    <View style={styles.heroTextBox}>
                        <Text style={styles.description}>{ description }</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Author</Text>
                    <Text>{ author }</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Content</Text>
                    <Text>{ content }</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>Link</Text>
                    <Text>{ link }</Text>
                </View>
            </ScrollView>
        );
    }
}

module.exports = BookDetail;