import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, 
         Dimensions, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { serverURL } from './../../../../constants/config';

const imgUrl = `${serverURL}/product/image/`;

class TopProduct extends Component {
    renderItem = ({ item }) => {
        const { items, productDetail, productTitleStyle, productPriceStyle, imageStyle } = styles;
        const { navigation } = this.props;
        
        return (
            <View style={[items, { elevation: 2 }]}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ProductDetail', { product: item })}
                >
                    <Image source={{ uri: `${imgUrl}${item.images[0]}` }} style={imageStyle} />
                    <View style={productDetail}>
                        <Text style={productTitleStyle}>{item.name.toUpperCase()}</Text>
                        <Text style={productPriceStyle}>{item.price}$</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const { wrapper, titleWrapper, textStyle, shadow, listStyle } = styles;
        const { data } = this.props.topProduct;

        return (
            <View style={[wrapper, shadow]}>
                <View style={titleWrapper}>
                    <Text style={textStyle}>TOP PRODUCT</Text>
                </View>
                {
                    data.length ? (<FlatList 
                        data={data}
                        style={listStyle}
                        renderItem={this.renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />) : null
                }
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

function mapStateToProps(state) {
    return {
        topProduct: state.product.topProduct
    };
}


export default connect(mapStateToProps, null)(TopProduct);
