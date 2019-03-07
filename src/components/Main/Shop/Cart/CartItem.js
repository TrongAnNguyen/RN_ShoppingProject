import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { serverURL } from './../../../../constants/config';
import * as Actions from './../../../../actions/action';

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

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: 10,
        margin: 7,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productContainer: {
        flex: 3,
        justifyContent: 'space-between',
        marginLeft: 10
    },
    productQuantity: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtName: {
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
});

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (productId) => dispatch(Actions.removeFromCart(productId)),
        increaseQuantity: (productId) => dispatch(Actions.increaseQuantity(productId)),
        decreaseQuantity: (productId) => dispatch(Actions.decreaseQuantity(productId))
    };
}

export default connect(null, mapDispatchToProps)(CartItem);
