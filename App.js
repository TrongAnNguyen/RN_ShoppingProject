import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Navigator from './src/components/Navigator';

const store = configureStore();

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}
