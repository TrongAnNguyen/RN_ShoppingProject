import React, { Component } from 'react';
import { 
            View, 
            Text, 
            TouchableOpacity, 
            Dimensions, 
            Image, 
            StyleSheet, 
} from 'react-native';

const { height } = Dimensions.get('window');
const icBackWhite = require('./../../media/appIcon/back_white.png');
const icBack = require('./../../media/appIcon/back.png');
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

const styles = StyleSheet.create({
    container: {
        height: height / 8.5,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    iconStyle: {
        width: 40,
        height: 40
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleStyle: {
        color: '#fff',
        fontSize: 30,
    }
});
