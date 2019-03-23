import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './../styles/Authentication/Header';

const icBackWhite = require('./../../media/appIcon/back_white.png');
const icLogo = require('./../../media/appIcon/ic_logo.png');

export default class Header extends Component {
    render() {
        const { container, rowWrapper, iconStyle, titleStyle } = styles;
        
        return (
            <View style={container}>
                <View style={rowWrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={icBackWhite} 
                            style={iconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Wearing a Dress</Text>
                    <Image 
                        source={icLogo} 
                        style={iconStyle}
                    />
                </View>
            </View>
        );
    }
}
