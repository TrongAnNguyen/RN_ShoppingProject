import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchView from './SearchView';
import ProductDetail from './../ProductDetail/ProductDetail';

export default class Search extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

const Navigator = createStackNavigator({
    SearchView,
    ProductDetail
},
{
    headerMode: 'none',
    initialRouteName: 'SearchView'
});
