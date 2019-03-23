import React, { Component } from 'react';
import { 
    View, Text, TextInput, TouchableOpacity, 
    KeyboardAvoidingView, Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import DropDownHolder from './../DropDownHolder';
import * as Actions from './../../actions/action';
import styles from './../styles/Authentication/Signup';

class Signup extends Component {
    shouldComponentUpdate(nextProps) {
        const { closeNotification } = this.props;
        const { notification } = nextProps;
        if (notification.status) {
            DropDownHolder.alert(notification.type, notification.title, notification.message);
            closeNotification();
        }
        return false;
    }
    
    render() {
        const { inputStyle, btnStyle, btnNameStyle } = styles;
        return (
            <KeyboardAvoidingView
                behavior="padding"
            >
                <View style={{ alignItems: 'center' }}>
                    <TextInput 
                        style={inputStyle}
                        placeholder='Enter your name'
                        onChangeText={this.props.inputFullName}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TextInput 
                        style={inputStyle}
                        placeholder='Enter your email'
                        onChangeText={this.props.inputEmail}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TextInput 
                        style={inputStyle}
                        secureTextEntry
                        placeholder='Enter your password'
                        onChangeText={this.props.inputPassword}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TextInput 
                        style={inputStyle}
                        secureTextEntry
                        placeholder='Re-enter your password'
                        onChangeText={this.props.inputRetypePassword}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TouchableOpacity 
                        style={btnStyle}
                        onPress={this.props.submitSignUp}
                    >
                        <Text style={btnNameStyle}>SIGN UP NOW</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

function mapStateToProps(state) {
    return {
        notification: state.user.authenticate.notification
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputFullName: (fullName) => dispatch(Actions.inputSignUpFullName(fullName)),
        inputEmail: (email) => dispatch(Actions.inputSignUpEmail(email)),
        inputPassword: (password) => dispatch(Actions.inputSignUpPassword(password)),
        inputRetypePassword: (retypePassword) => dispatch(Actions.inputSignUpRetypePassword(retypePassword)),
        submitSignUp: () => dispatch(Actions.submitSignUp()),
        closeNotification: () => dispatch(Actions.closeNotification())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
