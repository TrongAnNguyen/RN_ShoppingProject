import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProductItem from './../ListProduct/ProductItem';

export default class SearchView extends Component {
    gotoDetail = () => {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail');
    }

    render() {
        const { container, item } = styles;
        const { navigation } = this.props;
        return (
            <ScrollView style={container}>
                <View style={item}>
                    <ProductItem navigation={navigation} />
                </View>
                <View style={item}>
                    <ProductItem navigation={navigation} />
                </View>
                <View style={item}>
                    <ProductItem navigation={navigation} />
                </View>
                <View style={item}>
                    <ProductItem navigation={navigation} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5
    },
    item: {
        marginVertical: 5,
        alignItems: 'center',
    }
});
