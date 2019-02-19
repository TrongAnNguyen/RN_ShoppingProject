import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
    componentDidMount = () => {
        //this.drawer.open();
    }
    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Menu navigation={this.props.navigation} />}
                tapToClose
                openDrawerOffset={0.4}
            >
                <Shop openMenu={() => this.drawer.open()} />
            </Drawer>
        );
    }
}
