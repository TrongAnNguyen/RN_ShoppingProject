import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from './../ProductDetail/ProductDetail';

export default class Cart extends Component {
    render() {
        return (
            <Navigator />
        );
    }
}

const Navigator = createStackNavigator({
    CartView,
    ProductDetail
},
{
    headerMode: 'none',
    initialRouteName: 'CartView'
});
