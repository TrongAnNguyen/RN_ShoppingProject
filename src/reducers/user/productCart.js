import { AsyncStorage } from 'react-native';
import * as ActionTypes from './../../constants/ActionTypes';
import lang from 'lodash/lang';

const initialState = {};

export default function productCart(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
        {
            const { product } = action;
            let newState = null;
            if (lang.isEmpty(state[product.id])) {  // If not existed, add new
                newState = {
                    ...state,
                    [product.id]: {
                        ...product,
                        quantity: 1
                    }
                };
            } else {    // Existed, increase
                const { [product.id]: curProduct, ...otherObj } = state;
                newState = {
                    ...otherObj,
                    [product.id]: {
                        ...curProduct,
                        quantity: curProduct.quantity + 1
                    }
                };
            }
            return { ...newState };
        }
        case ActionTypes.REMOVE_FROM_CART:
        {
            const { [action.productId]: value, ...newState } = state;
            return { ...newState };
        }
        case ActionTypes.INCREASE_QUANTITY:
        {
            const { [action.productId]: product, ...otherObj } = state;
            const updatedProduct = {
                ...otherObj,
                [action.productId]: { 
                    ...product, 
                    quantity: product.quantity + 1
                }
            };
            
            return updatedProduct;
        }
        case ActionTypes.DECREASE_QUANTITY:
        {
            const { [action.productId]: product, ...otherObj } = state;
            const updatedProduct = { ...product };
            if (product.quantity > 1) {
                updatedProduct.quantity -= 1;
            }
            return {
                ...otherObj,
                [action.productId]: { ...updatedProduct }
            };
        }
        default:
            return state;
    }
}
