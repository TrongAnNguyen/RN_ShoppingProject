import { combineReducers } from 'redux';
import productCart from './productCart';
import authenticate from './authenticate';
import info from './info';

const user = combineReducers({
   productCart,
   authenticate,
   info
});

export default user;
