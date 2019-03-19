import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import * as Actions from './../../actions/action';
import Menu from './Menu';
import Shop from './Shop/Shop';

class Main extends Component {
    componentDidMount = () => {
        this.props.validateToken();
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

function mapDispatchToProps(dispatch) {
    return {
        validateToken: () => dispatch(Actions.validateToken())
    };
}

export default connect(null, mapDispatchToProps)(Main);
