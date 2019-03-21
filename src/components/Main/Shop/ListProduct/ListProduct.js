import React, { Component } from 'react';
import { 
    View, StyleSheet, ScrollView,
    Image, Text, TouchableOpacity, FlatList
} from 'react-native';
import { connect } from 'react-redux';
import lang from 'lodash/lang';
import * as Actions from './../../../../actions/action';
import ProductItem from './ProductItem';

import icBack from './../../../../media/appIcon/backList.png';

class ListProduct extends Component {
    componentDidMount() {
        const { 
            navigation, listProductCategory, fetchProductInCategory,
            listProductCollection, fetchProductInCollection
        } = this.props;
        const idType = navigation.getParam('idType', null);
        const isCollection = navigation.getParam('collection', false);
        if (idType !== null && lang.isEmpty(listProductCategory[idType])) {
            fetchProductInCategory(idType, 1);
        }
        if (isCollection && lang.isEmpty(listProductCollection)) {
            fetchProductInCollection(1);
        }
    }

    renderItemInCategory = () => {
        const { navigation, listProductCategory } = this.props;
        const idType = navigation.getParam('idType');
        const page = 1;
        if (lang.isEmpty(listProductCategory[idType])) return null;
        const productsByType = listProductCategory[idType][page];
        const listItems = Object.keys(productsByType).map(item => productsByType[item]);
        const listItemsJSX = (
            <FlatList 
                data={listItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductItem 
                        navigation={navigation} 
                        product={item}
                    />
                )}
            />
        );
        return listItemsJSX;
    } 

    renderItemInCollection = () => {
        const { navigation, listProductCollection } = this.props;
        const page = 1;
        if (lang.isEmpty(listProductCollection)) return null;
        const productsInCollection = listProductCollection[page];
        const listItems = Object.keys(productsInCollection).map(item => productsInCollection[item]);
        const listItemsJSX = (
            <FlatList 
                data={listItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductItem 
                        navigation={navigation} 
                        product={item}
                    />
                )}
            />
        );
        return listItemsJSX;
    }

    render() {
        const { container, header, headerWrapper, headerTitleStyle, wrapper, 
                shadow, iconStyle, titleStyle, hrStyle, wrapperListProduct 
            } = styles;
        const { navigation } = this.props;
        const nameType = navigation.getParam('nameType');
        const isCollection = navigation.getParam('collection', false);

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
                        {isCollection ? this.renderItemInCollection() : this.renderItemInCategory()}
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
        listProductCategory: state.product.productByType,
        listProductCollection: state.product.productCollection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProductInCategory: (idType, page) => dispatch(Actions.fetchProductByType(idType, page)),
        fetchProductInCollection: (page) => dispatch(Actions.fetchProductInCollection(page))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
