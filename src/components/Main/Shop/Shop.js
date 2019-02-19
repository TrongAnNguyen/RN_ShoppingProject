import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
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

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home'
        };
    }
    
    render() {
        const { iconStyle, titleStyle } = styles;
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
                badgeText: '1',
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
                selected={this.state.selectedTab === tab.title}
                title={tab.title}
                renderIcon={() => <Image source={tab.icon} style={iconStyle} />}
                renderSelectedIcon={() => <Image source={tab.selectedIcon} style={iconStyle} />}
                badgeText={tab.badgeText}
                selectedTitleStyle={titleStyle}
                onPress={() => this.setState({ selectedTab: tab.title })}
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
