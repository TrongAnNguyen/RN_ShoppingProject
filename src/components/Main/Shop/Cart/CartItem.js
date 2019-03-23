import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { serverURL } from './../../../../constants/config';
import * as Actions from './../../../../actions/action';
import styles from './../../../styles/Main/Shop/Cart/CartItem';

const imgUrl = `${serverURL}/product/image/`;

class CartItem extends Component {
    render() {
        const { container, imageStyle, titleWrapper, productContainer, productQuantity, 
                productController, txtName, txtPrice, txtShowDetail } = styles;
        const { navigation, item } = this.props;
        return (
            <View style={container}>
                <Image source={{ uri: `${imgUrl}${item.images[0]}` }} style={imageStyle} />
                <View style={productContainer}>
                    <View style={titleWrapper}>
                        <Text style={txtName}>{item.name.toUpperCase()}</Text>
                        <TouchableOpacity onPress={() => this.props.removeFromCart(item.id)}>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={txtPrice}>{item.price}$</Text>
                    <View style={productController}>
                        <View style={productQuantity}>
                            <TouchableOpacity onPress={() => this.props.increaseQuantity(item.id)}>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text>{item.quantity}</Text>
                            <TouchableOpacity onPress={() => this.props.decreaseQuantity(item.id)}>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ProductDetail', { product: item })}
                        >
                            <Text style={txtShowDetail}>Show Detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (productId) => dispatch(Actions.removeFromCart(productId)),
        increaseQuantity: (productId) => dispatch(Actions.increaseQuantity(productId)),
        decreaseQuantity: (productId) => dispatch(Actions.decreaseQuantity(productId))
    };
}

export default connect(null, mapDispatchToProps)(CartItem);
