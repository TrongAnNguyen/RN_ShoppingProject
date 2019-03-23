import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './../../../styles/Main/Shop/Contact/Contact';

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
                    <MapView
                        style={mapStyle}
                        initialRegion={{
                            latitude: 10.7713005,
                            longitude: 106.6889006,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                          }}
                    >
                        <Marker 
                            coordinate={{
                                latitude: 10.7713005,
                                longitude: 106.6889006
                            }}
                            title="Shop"
                        />
                    </MapView>
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
                        <Text style={textStyle}>shoppingproject</Text>
                    </View>
                    <View />
                    <View style={infoWrapper}>
                        <Image source={messIcon} style={iconStyle} />
                        <Text style={textStyle}>shoppingproject@gmail.com</Text>
                    </View>
                </View>
            </View>
        );
    }
}
