import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import configureStore from './src/configureStore';
import Navigator from './src/components/Navigator';
import DropDownHolder from './src/components/DropDownHolder';

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Provider store={store}>
                    <Navigator />
                </Provider>
                <DropdownAlert 
                    ref={ref => DropDownHolder.setDropDown(ref)} 
                    closeInterval={4000} 
                /> 
            </View>
        );
    }
}
