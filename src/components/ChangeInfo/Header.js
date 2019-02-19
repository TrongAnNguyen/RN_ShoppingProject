import React, { Component } from 'react';
import { 
            View, 
            Text, 
            TouchableOpacity, 
            Dimensions, 
            Image, 
            StyleSheet, 
} from 'react-native';

const icBackWhite = require('./../../media/appIcon/back_white.png');
const icLogo = require('./../../media/appIcon/ic_logo.png');

const { height } = Dimensions.get('window');

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
        fontSize: 20,
    }
});
