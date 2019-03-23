import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../actions/action';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import Tabbar from './Tabbar';
import styles from './../styles/Authentication/Authentication';

class Authentication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }
    onChangeScreen = (isSignIn) => {
        this.setState({ isSignIn });
        this.props.clearInput();
    }

    renderCurrentScreen = () => {
        const { navigation } = this.props;
        const screen = this.state.isSignIn 
        ? <Login navigation={navigation} /> : <Signup navigation={navigation} />;
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

function mapDispatchToProps(dispatch) {
    return {
        clearInput: () => dispatch(Actions.clearAuthenticateInput())
    };
}

export default connect(null, mapDispatchToProps)(Authentication);
