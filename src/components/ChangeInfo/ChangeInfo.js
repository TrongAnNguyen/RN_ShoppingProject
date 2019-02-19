import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import Header from './Header';

export default class ChangeInfo extends Component {
    render() {
        const { container, inputStyle, btnNameStyle, btnStyle } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} />
                <View style={container}>
                    <TextInput 
                        style={inputStyle}
                        value="An dep trai"
                    />
                    <TextInput 
                        style={inputStyle}
                        value="ABC duong XYZ"
                    />
                    <TextInput 
                        style={inputStyle}
                        value="0123456789"
                    />
                    <TouchableOpacity style={btnStyle}>
                        <Text style={btnNameStyle}>CHANGE YOUR INFORMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        backgroundColor: '#fff',
        width: width * 0.8,
        height: 50,
        margin: 10,
        borderRadius: 20,
        paddingLeft: 15,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#34B089'
    },
    btnStyle: {
        backgroundColor: '#34B089',
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
