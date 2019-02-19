import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Tabbar from './Tabbar';

export default class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }
    onChangeScreen = (isSignIn) => {
        this.setState({ isSignIn });
    }

    renderCurrentScreen = () => {
        const screen = this.state.isSignIn ? <Login /> : <Signup />;
        return screen;
    }

    render() {
        const { container } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} />
                <View style={container}>
                    {this.renderCurrentScreen()}
                    <Tabbar onChangeScreen={this.onChangeScreen} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34B089', 
        alignItems: 'center',
        paddingTop: 40,
        justifyContent: 'space-between'
    },
});
