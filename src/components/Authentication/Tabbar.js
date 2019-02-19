import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.8,
        marginBottom: 30,
    },
    btnTabStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50
    },
    btnTabSignInStyle: {
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight: 2
    },
    btnTabSignUpStyle: {
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30,
        marginLeft: 2
    },
    activeStyle: {
        fontSize: 18,
        color: '#34B089'
    },
    inActiveStyle: {
        fontSize: 18,
        color: '#d7d7d7'
    }
});
