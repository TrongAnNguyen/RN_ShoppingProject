import { combineReducers } from 'redux';
import allTypes from './allTypes';
import topProduct from './topProduct';
import productByType from './productByType';

const productReducer = combineReducers({
    allTypes,
    topProduct,
    productByType
});

export default productReducer;
