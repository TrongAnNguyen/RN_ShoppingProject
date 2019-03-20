import { combineReducers } from 'redux';
import productCart from './productCart';
import authenticate from './authenticate';
import info from './info';
import orderHistory from './orderHistory';

const user = combineReducers({
   productCart,
   authenticate,
   info,
   orderHistory
});

export default user;
