import { AsyncStorage } from 'react-native';
import * as ActionTypes from './../../constants/ActionTypes';
import lang from 'lodash/lang';

const initialState = {
    items: {},
    totalPrice: 0
};

export default function productCart(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
        {
            const { product } = action;
            let newState = null;
            if (lang.isEmpty(state.items[product.id])) {  // If not existed, add new
                newState = {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            quantity: 1
                        }
                    },
                    totalPrice: state.totalPrice + product.price
                };
            } else {    // Existed, increase
                const { [product.id]: curProduct, ...otherObj } = state.items;
                newState = {
                    ...state,
                    items: {
                        ...otherObj,
                        [product.id]: {
                            ...curProduct,
                            quantity: curProduct.quantity + 1
                        }
                    },
                    totalPrice: state.totalPrice + product.price
                };
            }
            return { ...newState };
        }
        case ActionTypes.REMOVE_FROM_CART:
        {
            const { [action.productId]: product, ...otherItems } = state.items;
            const newState = {
                ...state,
                items: {
                    ...otherItems
                },
                totalPrice: state.totalPrice - (product.price * product.quantity)
            };
            return { ...newState };
        }
        case ActionTypes.INCREASE_QUANTITY:
        {
            const { [action.productId]: product, ...otherItems } = state.items;
            const newState = {
                ...state,
                items: {
                    ...otherItems,
                    [action.productId]: {
                        ...product,
                        quantity: product.quantity + 1
                    }
                },
                totalPrice: state.totalPrice + product.price
            };
            
            return newState;
        }
        case ActionTypes.DECREASE_QUANTITY:
        {
            const { [action.productId]: product, ...otherItems } = state.items;
            const updatedProduct = { ...product };
            if (product.quantity > 1) {
                updatedProduct.quantity -= 1;
            }
            return {
                ...state,
                items: {
                    ...otherItems,
                    [action.productId]: updatedProduct
                },
                totalPrice: state.totalPrice - (product.price * 
                    (product.quantity - updatedProduct.quantity)) // keep old price when nothing change
            };
        }
        default:
            return state;
    }
}
