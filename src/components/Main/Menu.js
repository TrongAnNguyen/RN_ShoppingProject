import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../actions/action';
import styles from './../styles/Main/Menu';

const avatar = require('./../../media/temp/profile.png');

class Menu extends Component {
    handleSignOut = () => {
        const { navigation, handleLogout } = this.props;
        handleLogout();
        navigation.navigate('Authentication');
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
        const { navigation, userFullName } = this.props;
        const { loggedContainer, username, btnContainer } = styles;

        return (
            <View style={loggedContainer}>
                <Text style={username}>{userFullName}</Text>
                <View style={btnContainer}>
                    {this.renderButton('Order History', () => navigation.navigate('OrderHistory'))}
                    {this.renderButton('Change Info', () => navigation.navigate('ChangeInfo'))}
                    {this.renderButton('Sign out', this.handleSignOut)}
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
        const { isLogged } = this.props;
        return (
            <View style={container}>
                <Image source={avatar} style={avatarStyle} />
                { isLogged ? this.renderLoggedJSX() : this.renderSigninJSX() }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogged: state.user.authenticate.isLogged,
        userFullName: state.user.info.fullName
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogout: () => dispatch(Actions.handleLogout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
