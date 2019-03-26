import React, { Component } from 'react';
import { View, ScrollView, FlatList } from 'react-native';
import lang from 'lodash/lang';
import { connect } from 'react-redux';
import * as Actions from './../../actions/action';
import Header from './Header';
import OrderItem from './OrderItem';

class OrderHistory extends Component {
    componentDidMount() {
        const { fetchOrderHistory } = this.props;
        fetchOrderHistory();
    }

    renderItem = () => {
        const orderHistoryItems = this.props.orderHistory.data;
        if (lang.isEmpty(orderHistoryItems)) return null;
        const listItems = Object.keys(orderHistoryItems).map(item => orderHistoryItems[item]);
        const listItemsJSX = (
            <FlatList 
                data={listItems}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <OrderItem 
                        id={item.id}
                        datetime={item.date_order}
                        status={item.status}
                        total={item.total}
                    />
                )}
            />
        );
        return listItemsJSX;
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} />
                <ScrollView>
                    {this.renderItem()}
                </ScrollView>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        orderHistory: state.user.orderHistory
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOrderHistory: () => dispatch(Actions.fetchOrderHistory())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory);
