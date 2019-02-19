import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native';

import map from './../../../../media/appIcon/map.png';
import phoneIcon from './../../../../media/appIcon/phone.png';
import mailIcon from './../../../../media/appIcon/mail.png';
import messIcon from './../../../../media/appIcon/message.png';
import locationIcon from './../../../../media/appIcon/location.png';

export default class Contact extends Component {
    render() {
        const { container, mapStyle, mapContainer, iconStyle, infoContainer, infoWrapper,
                textStyle
        } = styles;
        return (
            <View style={container}>
                <View style={mapContainer}>
                    <Image source={map} style={mapStyle} />
                </View>
                <View style={infoContainer}>
                    <View style={infoWrapper}>
                        <Image source={locationIcon} style={iconStyle} />
                        <Text style={textStyle}>90 Le Thi Rieng / Ben Thanh Dist</Text>
                    </View>
                    <View />
                    <View style={infoWrapper}>
                        <Image source={phoneIcon} style={iconStyle} />
                        <Text style={textStyle}>(+84) 1694482178</Text>
                    </View>
                    <View />
                    <View style={infoWrapper}>
                        <Image source={mailIcon} style={iconStyle} />
                        <Text style={textStyle}>khoaphamtraining@gmail.com</Text>
                    </View>
                    <View />
                    <View style={infoWrapper}>
                        <Image source={messIcon} style={iconStyle} />
                        <Text style={textStyle}>(+84) 933066515</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    mapStyle: {
        height: 220,
        width: undefined,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    infoContainer: {
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 5
    },  
    infoWrapper: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#D6D6D6'
    },
    textStyle: {
        fontFamily: 'Avenir',
        color: '#AE005E',
        fontWeight: '400'
    }
});
