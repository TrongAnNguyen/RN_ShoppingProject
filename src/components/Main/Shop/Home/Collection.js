import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { serverURL } from './../../../../constants/config';
import styles from './../../../styles/Main/Shop/Home/Collection';

const collectionImgUrl = `${serverURL}/product/image/collection/spring`;

export default class Collection extends Component {
    render() {
        const { wrapper, shadow, textStyle, imageStyle } = styles;

        return (
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('ListProduct', {
                    collection: true,
                    nameType: 'SPRING COLLECTION'
                })}   
            >
                <View style={[wrapper, shadow]}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={textStyle}>SPRING COLLECTION</Text>
                    </View>
                    <Image source={{ uri: collectionImgUrl }} style={imageStyle} />
                </View>
            </TouchableOpacity>
        );
    }
}
