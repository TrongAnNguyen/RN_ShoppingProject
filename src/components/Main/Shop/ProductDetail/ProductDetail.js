import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image,
        FlatList, Dimensions, Text, ScrollView
    } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../../../actions/action';
import { serverURL } from './../../../../constants/config';

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

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        flex: 1
    },
    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    productContainer: {
        marginTop: 10,
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    descriptionHeader: {
        justifyContent: 'center'
    },
    titleContainer: {
        flexDirection: 'row',

    },
    titleName: {
        color: '#3F3F46',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    titleHighlight: {
        fontSize: 20,
        color: '#7D59C8',
        paddingHorizontal: 3
    },
    titlePrice: {
        fontSize: 20,
        color: '#9A9A9A'
    },
    hrStyle: {
        height: 1,
        backgroundColor: '#dbdbdb',
        marginVertical: 10
    },
    description: {

    },
    txtDescriptStyle: {
        color: '#AFAFAF'
    },
    lastRowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    colorInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    color: {
        height: 15, 
        width: 15,
        borderRadius: 7.5,
        marginHorizontal: 7
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        //fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        //fontFamily: 'Avenir'
    }
});

function mapStateToProps(state) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(Actions.addToCart(product))
    };
}

export default connect(null, mapDispatchToProps)(ProductDetail);
