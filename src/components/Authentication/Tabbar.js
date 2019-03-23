import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles/Authentication/Tabbar';

export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    signIn = () => {
        this.setState({ isSignIn: true });
        this.props.onChangeScreen(true);
    }

    signUp = () => {
        this.setState({ isSignIn: false });
        this.props.onChangeScreen(false);
    }

    render() {
        const { btnTabStyle, tabContainer, 
                activeStyle, inActiveStyle, btnTabSignInStyle, btnTabSignUpStyle } = styles;
        const { isSignIn } = this.state;
        return (
            <View style={tabContainer}>
                <TouchableOpacity 
                    style={[btnTabStyle, btnTabSignInStyle]}
                    onPress={this.signIn}
                >
                    <Text style={isSignIn ? activeStyle : inActiveStyle}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[btnTabStyle, btnTabSignUpStyle]}
                    onPress={this.signUp}    
                >
                    <Text style={isSignIn ? inActiveStyle : activeStyle}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
