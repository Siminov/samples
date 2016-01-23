/**
 * Created by echessa on 4/24/15.
 */

'use strict';

var React = require('react-native');
var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
var BookDetail = require('./BookDetail');

var Callback = require('siminov/Callback');
var Log = require('siminov/Log/Log');
var SyncRequest = require('siminov/Sync/SyncRequest');
var SyncHandler = require('siminov/Sync/SyncHandler');
var Database = require('siminov/Database/Database');

var Book = require('./Book/Models/Book');
var Select = require('siminov/Database/Select');
var BookConstants = require('./Book/Constants');

var GetLessions = require('./Book/Services/GetLessions');


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

class BooksList extends Component {

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
      var books;
      
      var callback = new Callback();
      callback.onExecute = function(transaction) {
        
        var selectCallback = new Callback();
        selectCallback.onSuccess = function(getBooks) {
          books = getBooks;
        }
        
        new Book().select().executeAsync(selectCallback, transaction);
      }
      
      callback.onSuccess = function(savedBooks) {
        Log.debug("Home", "populateHome", "Saved Books: " + savedBooks);
        
        if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
          books = savedBooks;
        }
        
        loadBooks();
      }
      
      callback.onFailure = function() {
        console.log('select books error');
      }
      
      
      if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST) {
        new Book().select().executeAsync(callback);
      } else if(BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
        
        var databaseDescriptorCallback = new Callback();
        databaseDescriptorCallback.onSuccess = function(databaseDescriptor) {
          Database.beginTransactionAsync(databaseDescriptor, callback);
        }
        
        new Lession().getDatabaseDescriptorAsync(databaseDescriptorCallback);
      } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
        books = new Book().select().execute();
        loadTasks();
      }
      
      function loadBooks() {
        me.setState({
            dataSource: me.state.dataSource.cloneWithRows(books),
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
                renderRow={this.renderBook.bind(this)}
                style={styles.listView}
                />
        );
    }

    renderBook(book) {
        return (
            <TouchableHighlight onPress={() => this.showBookDetail(book)} underlayColor='#dddddd'>
                <View>
                    <View style={styles.container}>
                        <Image
                            //source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                            style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}>{book.getTitle()}</Text>
                            <Text style={styles.author}>{book.getDescription()}</Text>
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
                    Loading books…
                </Text>
            </View>
        );
    }

    showBookDetail(book) {

      var me = this;
      
      /*var callback = new Callback();
      callback.onSuccess = function() {
        Log.debug("Home", "nacDetail", "Get Lessions Success");
      }
      
      
      var getLessions = new GetLessions();
      getLessions.setService(GetLessions.SERVICE_NAME);
      getLessions.setRequest(GetLessions.REQUEST_NAME);
      
      getLessions.addResource(GetLessions.BOOK_TITLE, book.getTitle());
      getLessions.addResource(GetLessions.BOOK, book);
      getLessions.addResource("HOME", me);
      
      getLessions.invokeAsync(callback);*/
      
      var callback = new Callback();
      callback.onSuccess = function() {
        
      }
      
      var syncRequest = new SyncRequest();
      syncRequest.setName(BookConstants.SYNC_LESSIONS);
      
      syncRequest.addResource(GetLessions.BOOK_TITLE, book.getTitle());
      syncRequest.addResource(GetLessions.BOOK, book);
      syncRequest.addResource("HOME", me);
      
      var syncHandler = SyncHandler.getInstance();
      
      if(BookConstants.REQUEST == BookConstants.ASYNC_REQUEST || BookConstants.REQUEST == BookConstants.ASYNC_TRANSACTION_REQUEST) {
        syncHandler.handleAsync(syncRequest, callback);
      } else if(BookConstants.REQUEST == BookConstants.SYNC_REQUEST) {
        syncHandler.handle(syncRequest);
      }
      
    }


}

module.exports = BooksList;