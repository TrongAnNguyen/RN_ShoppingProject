import axios from 'axios';
import * as ActionTypes from './../constants/ActionTypes';
import { serverURL } from './../constants/config';

export function getProductType() {
    return {
        type: ActionTypes.FETCHING_PRODUCT_TYPE
    };
}

export function getProductTypeSuccess(data) {
    return {
        type: ActionTypes.FETCHING_PRODUCT_TYPE_SUCCESS,
        data
    };
}

export function getTopProduct() {
    return {
        type: ActionTypes.FETCHING_TOP_PRODUCT
    };
}

export function getTopProductSuccess(data) {
    return {
        type: ActionTypes.FETCHING_TOP_PRODUCT_SUCCESS,
        data
    };
}

// export function getDataFailure() {
//     return {
//         type: ActionTypes.FETCHING_DATA_FAILURE
//     };
// }

export function fetchProductType() {
    return (dispatch) => {
        dispatch(getProductType());
        axios.get(`${serverURL}/product/alltype`)
        .then(result => {
            dispatch(getProductTypeSuccess(result.data));
        })
        .catch(error => console.log(`Error while fetching product/alltype: ${error}`));
    };
}

export function fetchTopProduct() {
    return (dispatch) => {
        dispatch(getTopProduct());
        axios.get(`${serverURL}/product/top`)
        .then(result => {
            dispatch(getTopProductSuccess(result.data));
        })
        .catch(error => console.log(`Error while fetching product/top: ${error}`));
    };
}

export function addToCart(product) {
    return {
        type: ActionTypes.ADD_TO_CART,
        product
    };
}

export function removeFromCart(productId) {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        productId
    };
}

export function increaseQuantity(productId) {
    return {
        type: ActionTypes.INCREASE_QUANTITY,
        productId
    };
}

export function decreaseQuantity(productId) {
    return {
        type: ActionTypes.DECREASE_QUANTITY,
        productId
    };
}
