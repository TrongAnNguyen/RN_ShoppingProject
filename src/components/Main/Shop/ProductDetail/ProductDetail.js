import React, { Component } from 'react';
import { 
    View, TouchableOpacity, Image,
    FlatList, Text, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../../../actions/action';
import { serverURL } from './../../../../constants/config';
import styles from './../../../styles/Main/Shop/ProductDetail/ProductDetail';

const imgUrl = `${serverURL}/product/image/`;
const icBack = require('./../../../../media/appIcon/back.png');
const icCartFull = require('./../../../../media/appIcon/cartfull.png');

class ProductDetail extends Component {
    addToCart = (product) => {
        if (product == null) return;
        this.props.addToCart(product);
    }
    
    keyExtractor = (item) => item;

    render() {
        const { container, header, iconStyle, productImageStyle, productContainer,
                titleName, titleContainer, titleHighlight, titlePrice, descriptionHeader, hrStyle,
                lastRowStyle, description, colorInfo, color, txtColor, txtMaterial
        } = styles;
        const { navigation } = this.props;
        const product = navigation.getParam('product', null);

        return (
            <ScrollView>
                <View style={container}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image 
                                source={icBack} 
                                style={iconStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.addToCart(product)}>
                            <Image 
                                source={icCartFull} 
                                style={iconStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    {
                        product !== null ? 
                        (<View style={productContainer}>
                            <View>
                                <FlatList 
                                    data={product.images}
                                    keyExtractor={this.keyExtractor}
                                    horizontal
                                    renderItem={({ item }) => (
                                        <Image 
                                            source={{ uri: `${imgUrl}${item}` }} 
                                            style={productImageStyle} 
                                        />
                                    )}
                                />
                            </View>
                            <View style={descriptionHeader}>
                                <View style={titleContainer}>
                                    <Text style={titleName}>{product.name.toUpperCase()}</Text>
                                    <Text style={titleHighlight}>/</Text>
                                    <Text style={titlePrice}>{product.price}$</Text>
                                </View>
                                <View style={hrStyle} />
                            </View>
                            <View style={description}>
                                <Text>{product.description}</Text>
                                <View style={lastRowStyle}>
                                    <Text style={txtMaterial}>Material {product.material}</Text>
                                    <View style={colorInfo}>
                                        <Text style={txtColor}>Color {product.color}</Text>
                                        <View style={[color, { backgroundColor: '#C21C70' }]} />
                                    </View>
                                </View>
                            </View>
                        </View>) : null
                    }
                </View>
            </ScrollView>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(Actions.addToCart(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductDetail);
