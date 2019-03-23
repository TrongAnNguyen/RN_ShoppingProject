import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, 
    ScrollView, FlatList, Alert
} from 'react-native';
import { connect } from 'react-redux';
import lang from 'lodash/lang';
import DropDownHolder from './../../../DropDownHolder';
import CartItem from './CartItem';
import * as Actions from './../../../../actions/action';
import styles from './../../../styles/Main/Shop/Cart/CartView';

class CartView extends Component {
    shouldComponentUpdate(nextProps) {
        const { closeNotification } = this.props;
        const { notification } = nextProps;
        if (notification.status) {
            DropDownHolder.alert(notification.type, notification.title, notification.message);
            closeNotification();
        }
        return true;
    }

    gotoDetail = () => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }

    handleSubmit = () => {
        Alert.alert(
            'Checkout',
            'Do you confirm to checkout?',
            [
                {
                  text: 'Yes', 
                  onPress: () => this.props.submitCheckout()
                },
                {
                    text: 'Cancel',
                    onPress: null,
                    style: 'cancel',
                },
            ],
            { cancelable: false },
          );
    }

    renderItem = () => {
        const { productCart, navigation } = this.props;
        const cartItems = productCart.items;
        if (lang.isEmpty(cartItems)) return null;
        const listItems = Object.keys(cartItems).map(item => cartItems[item]);
        const listItemsJSX = (
            <FlatList 
                data={listItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <CartItem 
                        navigation={navigation}
                        item={item}
                    />
                )}
            />
        );
        return listItemsJSX;
    }
    
    render() {
        const { container, productWrapper, checkoutTitle, btnCheckout } = styles;
        const { totalPrice, items } = this.props.productCart;
        return (
            <View style={container}>
                <ScrollView style={productWrapper}>
                    {this.renderItem()}
                </ScrollView>
                {
                    lang.isEmpty(items) ? (
                        <View style={btnCheckout}>
                            <Text style={checkoutTitle}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
                        </View>
                    ) : (
                        <TouchableOpacity 
                            style={btnCheckout}
                            onPress={() => this.handleSubmit()}
                        >
                            <Text style={checkoutTitle}>TOTAL {totalPrice}$ CHECKOUT NOW</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        productCart: state.user.productCart,
        notification: state.user.productCart.notification
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (productId) => dispatch(Actions.removeFromCart(productId)),
        increaseQuantity: (productId) => dispatch(Actions.increaseQuantity(productId)),
        decreaseQuantity: (productId) => dispatch(Actions.decreaseQuantity(productId)),
        submitCheckout: () => dispatch(Actions.submitCheckout()),
        closeNotification: () => dispatch(Actions.closeNotification())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartView);
