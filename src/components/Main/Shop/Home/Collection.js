import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const bannerImage = require('./../../../../media/temp/banner.jpg');

export default class Collection extends Component {
    render() {
        const { wrapper, shadow, textStyle, imageStyle } = styles;

        return (
            <View style={[wrapper, shadow]}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                {/* <View style={{  }}> */}

                <Image source={bannerImage} style={imageStyle} />
                {/* </View> */}
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth * 465) / 933;
const styles = StyleSheet.create({
    wrapper: {
        height: height / 3,
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        paddingTop: 0
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 3
    },
    textStyle: {
        fontSize: 20,
        color: '#afafaf',
    },
    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        flex: 4,
        resizeMode: 'cover'
    }
});
