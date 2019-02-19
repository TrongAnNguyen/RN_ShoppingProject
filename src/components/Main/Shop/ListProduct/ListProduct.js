import React, { Component } from 'react';
import { 
    View, StyleSheet, ScrollView,
    Image, Text, TouchableOpacity 
} from 'react-native';
import ProductItem from './ProductItem';

import icBack from './../../../../media/appIcon/backList.png';

export default class ListProduct extends Component {
    render() {
        const { container, header, headerWrapper, headerTitleStyle, wrapper, 
                shadow, iconStyle, titleStyle, hrStyle, wrapperListProduct 
            } = styles;
        const { navigation } = this.props;

        return (
            <View style={container}>
                <ScrollView style={[wrapper, shadow]}>
                    <View style={header}>
                        <View style={headerWrapper}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={icBack} style={iconStyle} />
                            </TouchableOpacity>
                            <View style={headerTitleStyle}>
                                <Text style={titleStyle}>Party Dress</Text> 
                            </View>
                        </View>
                        <View style={hrStyle} />
                    </View>
                    <View style={wrapperListProduct}>
                        <ProductItem navigation={navigation} />
                        <ProductItem navigation={navigation} />
                        <ProductItem navigation={navigation} />
                        <ProductItem navigation={navigation} />
                        <ProductItem navigation={navigation} />
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
