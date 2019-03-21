import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './../../../actions/action';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Header from './Header';

const homeIcon = require('./../../../media/appIcon/home0.png');
const homeSIcon = require('./../../../media/appIcon/home.png');
const cartIcon = require('./../../../media/appIcon/cart0.png');
const cartSIcon = require('./../../../media/appIcon/cart.png');
const searchIcon = require('./../../../media/appIcon/search0.png');
const searchSIcon = require('./../../../media/appIcon/search.png');
const contactIcon = require('./../../../media/appIcon/contact0.png');
const contactSIcon = require('./../../../media/appIcon/contact.png');

const { height, width } = Dimensions.get('window');

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }

    componentDidMount() {
        this.props.fetchProductType();
        this.props.fetchTopProduct();
    }
    
    render() {
        const { iconStyle, titleStyle } = styles;
        const { selectedTab, changeTabNavigator } = this.props;
        const numberCartItems = Object.keys(this.props.productCart).length;
        const listTabBar = [
            {
                title: 'Home',
                icon: homeIcon,
                selectedIcon: homeSIcon,
                badgeText: '',
                component: <Home />
            },
            {
                title: 'Cart',
                icon: cartIcon,
                selectedIcon: cartSIcon,
                badgeText: numberCartItems,
                component: <Cart />
            },
            {
                title: 'Search',
                icon: searchIcon,
                selectedIcon: searchSIcon,
                badgeText: '',
                component: <Search />
            },
            {
                title: 'Contact',
                icon: contactIcon,
                selectedIcon: contactSIcon,
                badgeText: '',
                component: <Contact />
            }
        ];
        const tabItems = listTabBar.map((tab, index) => 
            <TabNavigator.Item
                key={index}
                selected={selectedTab === tab.title}
                title={tab.title}
                renderIcon={() => <Image source={tab.icon} style={iconStyle} />}
                renderSelectedIcon={() => <Image source={tab.selectedIcon} style={iconStyle} />}
                badgeText={tab.badgeText}
                selectedTitleStyle={titleStyle}
                onPress={() => changeTabNavigator(tab.title)}
            >
                {tab.component}
            </TabNavigator.Item>
        );
        return (
            <View style={{ flex: 1 }}>
                <Header openMenu={this.props.openMenu} />
                <TabNavigator>
                    {tabItems}
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: width / 20,
        height: height / 30
    },
    titleStyle: {
        color: '#34b089'
    }
});

function mapStateToProps(state) {
    return {
        productCart: state.user.productCart.items,
        selectedTab: state.screen.selectedTab
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProductType: () => dispatch(Actions.fetchProductType()),
        fetchTopProduct: () => dispatch(Actions.fetchTopProduct()),
        changeTabNavigator: (selectedTab) => dispatch(Actions.changeTabNavigator(selectedTab))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
