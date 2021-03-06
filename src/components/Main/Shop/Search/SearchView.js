import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import lang from 'lodash/lang';
import ProductItem from './../ListProduct/ProductItem';
import styles from './../../../styles/Main/Shop/Search/SearchView';

class SearchView extends Component {
    renderItem = () => {
        const itemStyle = styles.item;
        const { navigation, products } = this.props;
        if (lang.isEmpty(products)) return null;
        const listItems = Object.keys(products).map(item => products[item]);
        const listItemsJSX = (
            <FlatList 
                data={listItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={itemStyle}>
                        <ProductItem 
                            navigation={navigation} 
                            product={item}
                        />
                    </View>
                )}
            />
        );
        return listItemsJSX;
    }

    render() {
        const { container } = styles;
        return (
            <ScrollView style={container}>
                {this.renderItem()}
            </ScrollView>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.product.search.product
    };
}

export default connect(mapStateToProps, null)(SearchView);
