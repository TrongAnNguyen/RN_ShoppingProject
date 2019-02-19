import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image,
    FlatList, Dimensions, Text
} from 'react-native';

import img1 from './../../../../media/temp/sp4.jpeg';
import img2 from './../../../../media/temp/sp5.jpeg';

const icBack = require('./../../../../media/appIcon/back.png');
const icCartFull = require('./../../../../media/appIcon/cartfull.png');

export default class ProductDetail extends Component {
    keyExtractor = (item) => item.id.toString();

    render() {
        const { container, header, iconStyle, productImageStyle, productContainer,
                titleName, titleContainer, titleHighlight, titlePrice, descriptionHeader, hrStyle,
                lastRowStyle, description, colorInfo, color, txtColor, txtMaterial
        } = styles;
        const data = [{ img: img1, id: 1 }, { img: img2, id: 2 }];
        return (
            <View style={container}>
                <View style={header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={icBack} 
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image 
                            source={icCartFull} 
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                </View>
                <View style={productContainer}>
                    <View>
                        <FlatList 
                            data={data}
                            keyExtractor={this.keyExtractor}
                            horizontal
                            renderItem={({ item }) => (
                                <Image source={item.img} style={productImageStyle} />
                            )}
                        />
                    </View>
                    <View style={descriptionHeader}>
                        <View style={titleContainer}>
                            <Text style={titleName}>{'Black off the'.toUpperCase()}</Text>
                            <Text style={titleHighlight}>/</Text>
                            <Text style={titlePrice}>124$</Text>
                        </View>
                        <View style={hrStyle} />
                    </View>
                    <View style={description}>
                        <Text>A delicate layer of eyelash lace brings dreamy elegance to this piece, while smooth, lightweight lining feels luxurious against your skin. We love it with heels for a look that fits in on date night, or with cool booties to add an edge.</Text>
                        <View style={lastRowStyle}>
                            <Text style={txtMaterial}>Material leather</Text>
                            <View style={colorInfo}>
                                <Text style={txtColor}>Color Khaki</Text>
                                <View style={[color, { backgroundColor: '#C21C70' }]} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
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
