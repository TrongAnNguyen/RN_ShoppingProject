import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { serverURL } from './../../../../constants/config';
import styles from './../../../styles/Main/Shop/ListProduct/ProductItem';

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
