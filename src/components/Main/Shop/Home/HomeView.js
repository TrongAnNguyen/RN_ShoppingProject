import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../../../actions/action';
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class HomeView extends Component {
    componentDidMount() {
        this.props.getProductCart();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#dbdbdb' }}>
                <ScrollView>
                    <Collection navigation={this.props.navigation} />
                    <Category navigation={this.props.navigation} />
                    <TopProduct navigation={this.props.navigation} />
                </ScrollView>
            </View>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProductCart: () => dispatch(Actions.getProductCart())
    };
}

export default connect(null, mapDispatchToProps)(HomeView);
