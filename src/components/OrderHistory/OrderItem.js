import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './../styles/OrderHistory/OrderItem';

export default class OrderItem extends Component {
    render() {
        const { container, itemInfo, infoTextStyle, green, dateColor, priceColor } = styles;
        const { id, datetime, status, total } = this.props;
        return (
            <View style={container}>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Order id:</Text>
                    <Text style={green}>{id}</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Order time:</Text>
                    <Text style={dateColor}>{datetime}</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Status:</Text>
                    <Text style={green}>{status ? 'Completed' : 'Pending'}</Text>
                </View>
                <View style={itemInfo}>
                    <Text style={infoTextStyle}>Total:</Text>
                    <Text style={priceColor}>{total}$</Text>
                </View>
            </View>
        );
    }
}
