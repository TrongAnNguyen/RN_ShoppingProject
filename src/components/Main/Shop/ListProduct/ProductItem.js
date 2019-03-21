import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { serverURL } from './../../../../constants/config';

const imgUrl = `${serverURL}/product/image/`;

export default class ProductItem extends Component {
    render() {
        const { container, imageStyle, wrapperInfo, lastRowStyle, 
                nameStyle, priceStyle, colorViewStyle, showDetailStyle 
        } = styles;
        const { navigation, product } = this.props;
        return (
            <View style={container}> 
                <Image source={{ uri: `${imgUrl}${product.images[0]}` }} style={imageStyle} />
                <View style={wrapperInfo}>
                    <Text style={nameStyle}>{product.name}</Text>
                    <Text style={priceStyle}>{product.price}$</Text>
                    <Text >Meterial {product.material}</Text>
                    <View style={lastRowStyle}>
                        <Text>Color {product.color}</Text>
                        <View style={colorViewStyle} />
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('ProductDetail', { product })}
                        >
                            <Text style={showDetailStyle}>Show detail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        borderTopColor: '#dbdbdb',
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    imageStyle: {
        width: 70,
        height: (70 * 452) / 361
    },
    wrapperInfo: {
        marginLeft: 20,
        justifyContent: 'space-between'
    },
    nameStyle: {
        color: '#d9d9d9',
        fontSize: 20
    },
    priceStyle: {
        color: '#cc0066'
    },
    colorViewStyle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#cc0066'
    },
    lastRowStyle: {
        width: 0.8 * (width - 100),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    showDetailStyle: {
        color: '#cc0066'
    }
});
