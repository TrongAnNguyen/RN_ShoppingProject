import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default class Login extends Component {
    render() {
        const { inputStyle, btnStyle, btnNameStyle } = styles;
        return (
            <View style={{ alignItems: 'center' }}>
                <TextInput 
                    style={inputStyle}
                    placeholder='Enter your email'
                />
                <TextInput 
                    style={inputStyle}
                    secureTextEntry
                    placeholder='Enter your password'
                />
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnNameStyle}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: '#fff',
        width: width * 0.8,
        height: 50,
        margin: 10,
        borderRadius: 20,
        paddingLeft: 15,
        fontSize: 18
    },
    btnStyle: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#fff',
        width: width * 0.8,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,

    },
    btnNameStyle: {
        color: '#fff',
        fontSize: 18
    },
});
