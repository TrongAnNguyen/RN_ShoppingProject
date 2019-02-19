import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

import sp1 from './../../../../media/temp/sp1.jpeg';

export default class CartItem extends Component {
    render() {
        const { container, imageStyle, titleWrapper, productContainer, productQuantity, 
                productController, txtName, txtPrice, txtShowDetail } = styles;
        const { navigation } = this.props;
        return (
            <View style={container}>
                <Image source={sp1} style={imageStyle} />
                <View style={productContainer}>
                    <View style={titleWrapper}>
                        <Text style={txtName}>Lace Sleeve Si</Text>
                        <TouchableOpacity>
                            <Text>X</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={txtPrice}>117$</Text>
                    <View style={productController}>
                        <View style={productQuantity}>
                            <TouchableOpacity>
                                <Text>+</Text>
                            </TouchableOpacity>
                            <Text>1</Text>
                            <TouchableOpacity>
                                <Text>-</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
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
