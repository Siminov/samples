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
    Navigator
} = React;

var hybridReactSample = React.createClass({
    
render: function() {
    
    return (
        
        <Navigator
        initialRoute={{
    name: 'Login',
    component: Login
        }}
        renderScene={(route, navigator) => {
        
        if(route.component) {
        return React.createElement(route.component, { navigator, ...route.passProps })
        }
        }}
        />
        );
}
    });

var styles = StyleSheet.create({
container: {
flex: 1
    }
    });

AppRegistry.registerComponent('HybridReactSample', () => hybridReactSample);
