import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, StyleSheet, 
    TextInput, Dimensions, Keyboard
} from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../actions/action';
import Header from './Header';
import DropDownHolder from './../DropDownHolder';

class ChangeInfo extends Component {
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
        const { container, inputStyle, btnNameStyle, btnStyle } = styles;
        const { 
            userInfo, inputFullName, inputAddress, inputPhoneNumber, 
            submitUpdate, navigation
        } = this.props;
        const { fullName, address, phoneNumber } = userInfo;
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} />
                <View style={container}>
                    <TextInput 
                        style={inputStyle}
                        placeholder='Your fullname'
                        defaultValue={fullName}
                        onChangeText={inputFullName}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TextInput 
                        style={inputStyle}
                        placeholder='Your address'
                        defaultValue={address}
                        onChangeText={inputAddress}
                        onBlur={Keyboard.dismiss()}
                    />
                    <TextInput 
                        style={inputStyle}
                        placeholder='Your phone number'
                        defaultValue={phoneNumber}
                        onChangeText={inputPhoneNumber}
                        keyboardType="phone-pad"
                        onBlur={Keyboard.dismiss()}
                    />
                    <TouchableOpacity 
                        style={btnStyle}
                        onPress={submitUpdate}
                    >
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

function mapStateToProps(state) {
    return {
        userInfo: state.user.info,
        notification: state.user.info.notification
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputFullName: (fullName) => dispatch(Actions.inputUpdateFullname(fullName)),
        inputAddress: (address) => dispatch(Actions.inputUpdateAddress(address)),
        inputPhoneNumber: (phone) => dispatch(Actions.inputUpdatePhone(phone)),
        submitUpdate: () => dispatch(Actions.submitUpdateInfo()),
        closeNotification: () => dispatch(Actions.closeNotification())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeInfo);
