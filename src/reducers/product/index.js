import { combineReducers } from 'redux';
import allTypes from './allTypes';
import topProduct from './topProduct';

const productReducer = combineReducers({
    allTypes,
    topProduct
});

export default productReducer;
