import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeView from './HomeView';
import ListProduct from './../ListProduct/ListProduct';
import ProductDetail from './../ProductDetail/ProductDetail';

export default class Home extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

const Navigator = createStackNavigator({
    HomeView,
    ListProduct,
    ProductDetail
},
{
    headerMode: 'none',
    initialRouteName: 'HomeView'
});
