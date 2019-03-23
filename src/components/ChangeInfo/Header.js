import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './../styles/ChangeInfo/Header';

const icBackWhite = require('./../../media/appIcon/back_white.png');
const icLogo = require('./../../media/appIcon/ic_logo.png');

export default class Header extends Component {
    render() {
        const { iconStyle, titleStyle } = styles;
        return (
            <View style={styles.container}>
                <View style={styles.rowWrapper}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image 
                            source={icBackWhite} 
                            style={iconStyle}
                        />
                        </TouchableOpacity>
                        <Text style={titleStyle}>User Information</Text>
                        <Image 
                            source={icLogo} 
                            style={iconStyle}
                        />
                </View>
            </View>
        );
    }
}
