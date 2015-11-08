/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./Login');



var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Component,
  AlertIOS,
  NavigatorIOS,
} = React;

var hybridReactSample = React.createClass({
    
    render: function() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    //title: 'Login',
                    component: Login
            }}/>
        );
   }
    
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('HybridReactSample', () => hybridReactSample);
