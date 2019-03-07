import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CartItem from './CartItem';

export default class CartView extends Component {
    gotoDetail = () => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }

    render() {
        const { container, productWrapper, checkoutTitle, btnCheckout } = styles;
        const { navigation } = this.props;
        return (
            <View style={container}>
                <ScrollView style={productWrapper}>
                    <CartItem navigation={navigation} />
                    <CartItem navigation={navigation} />
                    <CartItem navigation={navigation} />
                </ScrollView>
                <TouchableOpacity style={btnCheckout}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    productWrapper: {
        flex: 1
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    btnCheckout: {
        height: 50,
        margin: 10,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

