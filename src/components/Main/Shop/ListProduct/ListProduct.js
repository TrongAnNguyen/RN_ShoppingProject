import React, { Component } from 'react';
import { 
    View, StyleSheet, ScrollView,
    Image, Text, TouchableOpacity 
} from 'react-native';
import { connect } from 'react-redux';
import lang from 'lodash/lang';
import * as Actions from './../../../../actions/action';
import ProductItem from './ProductItem';

import icBack from './../../../../media/appIcon/backList.png';

class ListProduct extends Component {
    componentDidMount() {
        const { navigation, listProduct, fetchProduct } = this.props;
        const idType = navigation.getParam('idType');
        if (lang.isEmpty(listProduct[idType])) {
            fetchProduct(idType, 1);
        }
        console.log(listProduct);
    }

    renderItem = () => {
        const { navigation, listProduct } = this.props;
        const idType = navigation.getParam('idType');
        const page = 1;
        if (lang.isEmpty(listProduct[idType])) return null;
        const productsByType = listProduct[idType][page];
        const listItems = Object.keys(productsByType).map(item => productsByType[item]);
        const listItemsJSX = listItems.map(item => (
            <ProductItem 
                key={item.id}
                navigation={navigation} 
                product={item}
            />
        ));
        return listItemsJSX;
    }

    render() {
        const { container, header, headerWrapper, headerTitleStyle, wrapper, 
                shadow, iconStyle, titleStyle, hrStyle, wrapperListProduct 
            } = styles;
        const { navigation } = this.props;
        const nameType = navigation.getParam('nameType');

        return (
            <View style={container}>
                <ScrollView style={[wrapper, shadow]}>
                    <View style={header}>
                        <View style={headerWrapper}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={icBack} style={iconStyle} />
                            </TouchableOpacity>
                            <View style={headerTitleStyle}>
                                <Text style={titleStyle}>{nameType}</Text> 
                            </View>
                        </View>
                        <View style={hrStyle} />
                    </View>
                    <View style={wrapperListProduct}>
                        {this.renderItem()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb'
    },
    header: {
        height: 50,
        paddingTop: 5,
        justifyContent: 'space-between',
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitleStyle: {
        width: '90%',
        alignItems: 'center',
    },
    wrapper: {
        backgroundColor: '#fff',
        margin: 10
    },
    shadow: {
        shadowColor: '#2e272b',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 3
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: '#B10D65',
        fontSize: 20
    },
    hrStyle: {
        height: 1,
        backgroundColor: '#dbdbdb',
    },
    wrapperListProduct: {
        paddingLeft: 10
    }
});

function mapStateToProps(state) {
    return {
        listProduct: state.product.productByType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProduct: (idType, page) => dispatch(Actions.fetchProductByType(idType, page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
