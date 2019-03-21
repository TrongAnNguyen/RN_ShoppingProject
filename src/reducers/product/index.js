import { combineReducers } from 'redux';
import allTypes from './allTypes';
import topProduct from './topProduct';
import productByType from './productByType';
import productCollection from './productCollection';
import search from './search';

const productReducer = combineReducers({
    allTypes,
    topProduct,
    productByType,
    productCollection,
    search
});

export default productReducer;
