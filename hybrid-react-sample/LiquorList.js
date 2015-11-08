/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
var LiquorDetail = require('./LiquorDetail');

var Callback = require('./Siminov/Callback');
var Log = require('./Siminov/Log/Log');
var SyncRequest = require('./Siminov/Sync/SyncRequest');
var SyncHandler = require('./Siminov/Sync/SyncHandler');
var Database = require('./Siminov/Database/Database');

var Liquor = require('./Liquor/Models/Liquor');
var Select = require('./Siminov/Database/Select');
var LiquorConstants = require('./Liquor/Constants');

var GetLiquorBrands = require('./Liquor/Services/GetLiquorBrands');


var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
    ListView,
    TouchableHighlight,
    ActivityIndicatorIOS
    } = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        backgroundColor: '#F5FCFF'
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class LiquorList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {

      var me = this;
      var liquors;
      
      var callback = new Callback();
      callback.onExecute = function(transaction) {
        
        var selectCallback = new Callback();
        selectCallback.onSuccess = function(getLiquors) {
          liquors = getLiquors;
        }
        
        new Liquor().select().executeAsync(selectCallback, transaction);
      }
      
      callback.onSuccess = function(savedLiquors) {
        Log.debug("Home", "populateHome", "Saved Liquors: " + savedLiquors);
        
        if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
          liquors = savedLiquors;
        }
        
        loadLiquors();
      }
      
      callback.onFailure = function() {
        console.log('select liquors error');
      }
      
      
      if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST) {
        new Liquor().select().executeAsync(callback);
      } else if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
        
        var databaseDescriptorCallback = new Callback();
        databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
          Database.beginTransactionAsync(databaseDescriptor, callback);
        }
        
        new LiquorBrand().getDatabaseDescriptorAsync(databaseDescriptorCallback);
      } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
        liquors = new Liquor().select().execute();
        loadTasks();
      }
      
      function loadLiquors() {
        me.setState({
            dataSource: me.state.dataSource.cloneWithRows(liquors),
            isLoading: false
        });
      }
    }

    render() {
        if (this.state.isLoading) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderLiquor.bind(this)}
                style={styles.listView}
                />
        );
    }

    renderLiquor(liquor) {
        return (
            <TouchableHighlight onPress={() => this.showLiquorDetail(liquor)} underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            //source={{uri: liquor.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{liquor.getLiquorType()}</Text>
                            <Text style={styles.author}>{liquor.getDescription()}</Text>
                        </View>
                    </View>
                    <View style={styles.separator} />
                </View>
            </TouchableHighlight>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS
                    size='large'/>
                <Text>
                    Loading liquors...
                </Text>
            </View>
        );
    }

    showLiquorDetail(liquor) {

      var me = this;
      
      /*var callback = new Callback();
      callback.onSuccess = function() {
        Log.debug("Home", "nacDetail", "Get Liquor Brands Success");
      }
      
      
      var getLiquorBrands = new GetLiquorBrands();
      getLiquorBrands.setService(GetLiquorBrands.SERVICE_NAME);
      getLiquorBrands.setRequest(GetLiquorBrands.REQUEST_NAME);
      
      getLiquorBrands.addResource(GetLiquorBrands.LIQUOR_NAME, liquor.getLiquorType());
      getLiquorBrands.addResource(GetLiquorBrands.LIQUOR, liquor);
      getLiquorBrands.addResource("HOME", me);
      
      getLiquorBrands.invokeAsync(callback);*/
      
      var callback = new Callback();
      callback.onSuccess = function() {
        
      }
      
      var syncRequest = new SyncRequest();
      syncRequest.setName(LiquorConstants.SYNC_LIQUOR_BRANDS);
      
      syncRequest.addResource(GetLiquorBrands.LIQUOR_NAME, liquor.getLiquorType());
      syncRequest.addResource(GetLiquorBrands.LIQUOR, liquor);
      syncRequest.addResource("HOME", me);
      
      var syncHandler = SyncHandler.getInstance();
      
      if(LiquorConstants.REQUEST == LiquorConstants.ASYNC_REQUEST || LiquorConstants.REQUEST == LiquorConstants.ASYNC_TRANSACTION_REQUEST) {
        syncHandler.handleAsync(syncRequest, callback);
      } else if(LiquorConstants.REQUEST == LiquorConstants.SYNC_REQUEST) {
        syncHandler.handle(syncRequest);
      }
      
    }


}

module.exports = LiquorList;