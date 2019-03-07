import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import lang from 'lodash/lang';
import CartItem from './CartItem';
import * as Actions from './../../../../actions/action';

class CartView extends Component {
    gotoDetail = () => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }

    renderItem = () => {
        const { productCart, navigation } = this.props;
        const cartItems = productCart.items;
        if (lang.isEmpty(cartItems)) return null;
        const listItems = Object.keys(cartItems).map(item => cartItems[item]);
        const listItemsJsx = listItems.map(item => (
            <CartItem 
                key={item.id}
                navigation={navigation}
                item={item}
            />
        ));
        return listItemsJsx;
    }
    
    render() {
        const { container, productWrapper, checkoutTitle, btnCheckout } = styles;
        const { totalPrice } = this.props.productCart;
        return (
            <View style={container}>
                <ScrollView style={productWrapper}>
                    {this.renderItem()}
                </ScrollView>
                <TouchableOpacity style={btnCheckout}>
                    <Text style={checkoutTitle}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
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

function mapStateToProps(state) {
    return {
        productCart: state.user.productCart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (productId) => dispatch(Actions.removeFromCart(productId)),
        increaseQuantity: (productId) => dispatch(Actions.increaseQuantity(productId)),
        decreaseQuantity: (productId) => dispatch(Actions.decreaseQuantity(productId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
