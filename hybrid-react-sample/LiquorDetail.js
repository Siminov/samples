/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');

var Callback = require('./Siminov/Callback');
var Log = require('./Siminov/Log/Log');
var Database = require('./Siminov/Database/Database');

var LiquorConstants = require('./Liquor/Constants');

var LiquorBrand = require('./Liquor/Models/LiquorBrand');

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

class LiquorDetail extends Component {
  
    render() {
        
        var liquor = this.props.liquor;
        var description = (typeof liquor.getDescription() !== 'undefined') ? liquor.getDescription() : '';
        var history = (typeof liquor.getHistory() !== 'undefined') ? liquor.getHistory() : '';
        var content = (typeof liquor.getAlcholContent() !== 'undefined') ? liquor.getAlcholContent() : '';
        var link = (typeof liquor.getLink() !== 'undefined') ? liquor.getLink() : '';

        var liquorBrands;
      
        var callback = new Callback();
        callback.onExecute = function(transaction) {
        
          var getLiquorBrands = new Callback();
          getLiquorBrands.onSuccess = function(getLiquorBrands) {
            liquorBrands = getLiquorBrands;
          }
        
          new LiquorBrand().select().where("LIQUOR_TYPE").equalTo(liquor.getLiquorType()).executeAsync(getLiquorBrands, transaction);
        }
      
        callback.onSuccess = function(savedLiquorBrands) {
          Log.debug("Home", "populateDetail", "Get Liquor Brands Success: " + savedLiquorBrands);
        
          if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
            liquorBrands = savedLiquorBrands;
          }
        
          loadLiquorBrands();
        }
      
        callback.onFailure = function() {
          console.log('get liquor brands error');
        }
      
      
        if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
          new LiquorBrand().select().where("LIQUOR_TYPE").equalTo(liquor.getLiquorType()).executeAsync(callback);
        } else if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
          
          var databaseDescriptorCallback = new Callback();
          databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
              Database.beginTransactionAsync(databaseDescriptor, callback);
          }
          
          new LiquorBrand().getDatabaseDescriptorAsync(databaseDescriptorCallback);
        } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
          liquorBrands = new LiquorBrand().select().where("LIQUOR_TYPE").equalTo(liquor.getLiquorType()).execute();
          loadLiquorBrands();
        }
      
        function loadLiquorBrands() {
        
        }
      
        return (
            <ScrollView style={styles.scrollview}>
                <View style={styles.hero}>
                    <View style={styles.heroTextBox}>
                        <Text style={styles.description}>{ description }</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.label}>History</Text>
                    <Text>{ history }</Text>
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

module.exports = LiquorDetail;