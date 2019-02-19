import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#dbdbdb' }}>
                <ScrollView>
                    <Collection />
                    <Category navigation={this.props.navigation} />
                    <TopProduct navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}
