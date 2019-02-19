import React, { Component } from 'react';
import { 
            View, 
            Text, 
            TouchableOpacity, 
            Dimensions, 
            Image, 
            StyleSheet, 
            TextInput 
} from 'react-native';

const { height } = Dimensions.get('window');
const icMenu = require('./../../../media/appIcon/ic_menu.png');
const icLogo = require('./../../../media/appIcon/ic_logo.png');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowWrapper}>
                    <TouchableOpacity onPress={this.props.openMenu}>
                        <Image 
                            source={icMenu} 
                            style={styles.iconStyle}
                        />
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image 
                        source={icLogo} 
                        style={styles.iconStyle}
                    />
                </View>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='What do you want to buy?'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: height / 7.5,
        backgroundColor: '#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    rowWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#fff',
        fontSize: 17,
        paddingLeft: 20,
        paddingTop: 0,
        paddingBottom: 0
    },
    titleStyle: {
        color: '#fff',
        fontSize: 20
    }
});
