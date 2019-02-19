import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import OrderItem from './OrderItem';

export default class OrderHistory extends Component {
    render() {
        const { container } = styles;
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <View style={container}>
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        //justifyContent: 'center',
        //marginHorizontal: 10,
    }
});
