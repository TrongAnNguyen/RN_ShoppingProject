import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const avatar = require('./../../media/temp/profile.png');

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true
        };
    }

    renderButton = (name, onPress) => {
        const { buttonStyle, btnNameStyle } = styles;

        return (
            <TouchableOpacity style={buttonStyle} onPress={onPress}>
                <Text style={btnNameStyle}>{name}</Text>
            </TouchableOpacity>
        );
    }

    renderLoggedJSX = () => {
        const { navigation } = this.props;
        const { loggedContainer, username, btnContainer } = styles;

        return (
            <View style={loggedContainer}>
                <Text style={username}>Nguyen Trong An</Text>
                <View style={btnContainer}>
                    {this.renderButton('Order History', () => navigation.navigate('OrderHistory'))}
                    {this.renderButton('Change Info', () => navigation.navigate('ChangeInfo'))}
                    {this.renderButton('Sign out', () => navigation.navigate('Authentication'))}
                </View>
            </View>
        );
    }

    renderSigninJSX = () => {
        const { navigation } = this.props;
        return (
            <View>
                {this.renderButton('Sign In', () => navigation.navigate('Authentication'))}
            </View>
        );
    }

    render() {
        const { container, avatarStyle } = styles;
        return (
            <View style={container}>
                <Image source={avatar} style={avatarStyle} />
                { this.state.isLogged ? this.renderLoggedJSX() : this.renderSigninJSX() }
            </View>
        );
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34B089',
        flex: 1,
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    avatarStyle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 25
    },
    buttonStyle: {
        height: 60,
        width: width * 0.53,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    btnNameStyle: {
        color: '#34B089',
        fontSize: 20
    },
    username: {
        marginTop: 10,
        fontSize: 18,
        color: '#fff' 
    },
    loggedContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    btnContainer: {
        marginBottom: 100
    }
});
