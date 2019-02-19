import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, 
         Dimensions, TouchableOpacity } from 'react-native';

const product1 = require('./../../../../media/temp/sp1.jpeg');
const product2 = require('./../../../../media/temp/sp2.jpeg');
const product3 = require('./../../../../media/temp/sp3.jpeg');
const product4 = require('./../../../../media/temp/sp4.jpeg');
const product5 = require('./../../../../media/temp/sp5.jpeg');

const data = [
    {
        image: product1,
        title: 'BLACK OFF THE 1',
        price: '124$'
    },
    {
        image: product2,
        title: 'BLACK OFF THE 2',
        price: '124$'
    },
    {
        image: product3,
        title: 'BLACK OFF THE 3',
        price: '124$'
    },
    {
        image: product4,
        title: 'BLACK OFF THE 4',
        price: '124$'
    },
    {
        image: product5,
        title: 'BLACK OFF THE 5',
        price: '124$'
    },
];

export default class TopProduct extends Component {
    renderItem = ({ item }) => {
        const { items, productDetail, productTitleStyle, productPriceStyle, imageStyle } = styles;
        const { navigation } = this.props;

        return (
            <View style={[items, { elevation: 2 }]}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetail')}>
                    <Image source={item.image} style={imageStyle} />
                    <View style={productDetail}>
                        <Text style={productTitleStyle}>{item.title}</Text>
                        <Text style={productPriceStyle}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { wrapper, titleWrapper, textStyle, shadow, listStyle } = styles;
        return (
            <View style={[wrapper, shadow]}>
                <View style={titleWrapper}>
                    <Text style={textStyle}>TOP PRODUCT</Text>
                </View>
                <FlatList 
                    data={data}
                    style={listStyle}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor={item => item.title}
                />
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imgWidth = (width - 60) / 2;
const imgHeight = (imgWidth / 361) * 452;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    shadow: {
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    titleWrapper: {
        justifyContent: 'center',
        height: 50,
    },
    textStyle: {
        fontSize: 20,
        color: '#afafaf',
    },
    listStyle: {
    
    },
    items: {
        height: imgHeight + 70,
        marginRight: 15,
        marginBottom: 15,
        borderWidth: 0.4,
        borderColor: '#eaefeb'
    },
    imageStyle: {
        height: imgHeight,
        width: imgWidth,
    },
    productDetail: {
        margin: 10,
    },
    productTitleStyle: {
        color: '#afafaf',
        fontSize: 15
    },
    productPriceStyle: {
        fontSize: 15, 
        color: '#a0033f'
    }
});
