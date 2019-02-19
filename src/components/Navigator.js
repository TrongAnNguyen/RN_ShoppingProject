import { createStackNavigator } from 'react-navigation';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

export default createStackNavigator({
    Main,
    Authentication,
    ChangeInfo,
    OrderHistory
}, {
    headerMode: 'none',
    initialRouteName: 'Main'
});
