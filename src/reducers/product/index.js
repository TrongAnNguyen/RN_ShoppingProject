import { combineReducers } from 'redux';
import allTypes from './allTypes';
import topProduct from './topProduct';
import productByType from './productByType';
import productCollection from './productCollection';

const productReducer = combineReducers({
    allTypes,
    topProduct,
    productByType,
    productCollection
});

export default productReducer;
