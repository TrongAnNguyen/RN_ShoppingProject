import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class OrderItem extends Component {
    render() {
        const { container, itemInfo, infoTextStyle, green, dateColor, priceColor } = styles;
        return (
            <View style={container}>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Order id:</Text>
                    <Text style={green}>orderID</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Order time:</Text>
                    <Text style={dateColor}>yyyy-mm-dd hh:mm:ss</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Status:</Text>
                    <Text style={green}>Pending</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Total:</Text>
                    <Text style={priceColor}>300$</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-around',
        height: 100,
        padding: 10
    },
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoTextStyle: {
        color: '#90949b'
    },
    green: {
        color: '#00e6ac'
    },
    dateColor: {
        color: '#cc0066'
    },
    priceColor: {
        color: '#cc0066',
        fontWeight: 'bold'
    }
});
