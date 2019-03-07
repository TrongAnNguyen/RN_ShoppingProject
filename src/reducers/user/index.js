import { combineReducers } from 'redux';
import productCart from './productCart';

const user = combineReducers({
   productCart
});

export default user;
