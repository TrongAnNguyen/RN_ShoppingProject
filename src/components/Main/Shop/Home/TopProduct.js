import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { serverURL } from './../../../../constants/config';
import styles from './../../../styles/Main/Shop/Home/TopProduct';

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

function mapStateToProps(state) {
    return {
        topProduct: state.product.topProduct
    };
}


export default connect(mapStateToProps, null)(TopProduct);
