import { AsyncStorage } from 'react-native';
import axios from 'axios';
import lang from 'lodash/lang';
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

export function getProductCartSuccess(productCart) {
    return {
        type: ActionTypes.GET_PRODUCT_CART_SUCCESS,
        productCart
    };
}

export function getProductCart() {
    return async (dispatch) => {
        const productCart = await AsyncStorage.getItem('@productCart');
        if (productCart !== null) {
            dispatch(getProductCartSuccess(JSON.parse(productCart)));
        }
    };
}

export function signInSuccess() {
    return {
        type: ActionTypes.SIGN_IN_SUCCESS
    };
}

export function inputSignUpFullName(fullName) {
    return {
        type: ActionTypes.INPUT_SIGN_UP_FULL_NAME,
        fullName
    };
}

export function inputSignUpEmail(email) {
    return {
        type: ActionTypes.INPUT_SIGN_UP_EMAIL,
        email
    };
}

export function inputSignUpPassword(password) {
    return {
        type: ActionTypes.INPUT_SIGN_UP_PASSWORD,
        password
    };
}

export function inputSigninEmail(email) {
    return {
        type: ActionTypes.INPUT_SIGN_IN_EMAIL,
        email
    };
}

export function inputSigninPassword(password) {
    return {
        type: ActionTypes.INPUT_SIGN_IN_PASSWORD,
        password
    };
}

export function inputSignUpRetypePassword(retypePassword) {
    return {
        type: ActionTypes.INPUT_SIGN_UP_RETYPE_PASSWORD,
        retypePassword
    };
}

export function submitSignIn() {
    return (dispatch, getState) => {
        const state = getState();
        const { email, password } = state.user.authenticate.signin;
        if (lang.isEmpty(email)) {
            dispatch(notifySigninMessage('warn', 'EMAIL_CANNOT_EMPTY'));
            return;
        }
        if (lang.isEmpty(password)) {
            dispatch(notifySigninMessage('warn', 'PASSWORD_CANNOT_EMPTY'));
            return;
        }
        const url = `${serverURL}/auth/login`;
        axios.post(url, {
            email,
            password
        }).then(result => {
            const { message } = result.data;
            switch (message) {
                case 'INCORRECT_EMAIL_OR_PASSWORD':
                    dispatch(notifySigninMessage('error', message));
                    break;
                case 'LOGIN_SUCCESSFULLY':
                {
                    const { user, token } = result.data;
                    dispatch(notifySigninMessage('success', message));
                    dispatch(updateUserInfo(user));
                    dispatch(signInSuccess());
                    AsyncStorage.setItem('@Shopping_UserToken', JSON.stringify(token));
                    break;
                }
                default:
                    break;
            }
        }).catch(error => {
            dispatch(notifySigninMessage('error', 'UNKNOW_ERROR'));
            console.log('Error when post signup requrest: ', error);
        });
    };
}

export function notifySignupMessage(messageType, message) {
    return {
        type: ActionTypes.NOTIFY_SIGNUP_MESSAGE,
        messageType,
        message
    };
}

export function notifySigninMessage(messageType, message) {
    return {
        type: ActionTypes.NOTIFY_SIGNIN_MESSAGE,
        messageType,
        message
    };
}

export function closeNotification() {
    return {
        type: ActionTypes.CLOSE_NOTIFICATION
    };
}

export function signupSuccess() {
    return {
        type: ActionTypes.SIGN_UP_SUCCESS
    };
}

export function submitSignUp() {
    return (dispatch, getState) => {
        const state = getState();
        const { fullName, email, password, retypePassword } = state.user.authenticate.signup;
        if (lang.isEmpty(fullName)) {
            dispatch(notifySignupMessage('warn', 'FULL_NAME_CANNOT_EMPTY'));
            return;
        }
        if (lang.isEmpty(email)) {
            dispatch(notifySignupMessage('warn', 'EMAIL_CANNOT_EMPTY'));
            return;
        }
        if (lang.isEmpty(password)) {
            dispatch(notifySignupMessage('warn', 'PASSWORD_CANNOT_EMPTY'));
            return;
        }
        if (lang.isEmpty(retypePassword)) {
            dispatch(notifySignupMessage('warn', 'RETYPE_PASSWORD_CANNOT_EMPTY'));
            return;
        }
        if (password !== retypePassword) {
            dispatch(notifySignupMessage('error', 'SIGNUP_RETYPE_PASSWORD_NOT_MATCH'));
            return;
        }
        const url = `${serverURL}/auth/signup`;
        axios.post(url, {
            fullName, 
            email, 
            password
        }).then(result => {
            const { message } = result.data;
            switch (message) {
                case 'EMAIL_ALREADY_EXISTS':
                    dispatch(notifySignupMessage('error', message));
                    break;
                case 'SIGNUP_SUCCESSFULLY':
                    dispatch(notifySignupMessage('success', message));
                    break;
                default:
                    dispatch(notifySignupMessage('error', 'UNKNOW_ERROR'));
                    break;
            }
        }).catch(error => {
            dispatch(notifySignupMessage('error', 'UNKNOW_ERROR'));
            console.log('Error when post signup requrest: ', error);
        });
    };
}

export function updateUserInfo(user) {
    return {
        type: ActionTypes.UPDATE_USER_INFO,
        user
    };
}

export function logoutUser() {
    return {
        type: ActionTypes.LOGOUT_USER
    };
}

export function handleLogout() {
    return (dispatch) => {
        AsyncStorage.removeItem('@Shopping_UserToken');
        dispatch(logoutUser());
    };
}

export function clearAuthenticateInput() {
    return {
        type: ActionTypes.CLEAR_AUTHENTICATE_INPUT
    };
}

export function validateToken() {
    return async (dispatch) => {
        const rawToken = await AsyncStorage.getItem('@Shopping_UserToken');
        const token = JSON.parse(rawToken);
        const url = `${serverURL}/auth/validate-token`;
        axios.post(url, {
            token
        }).then(result => {
            const { data } = result;
            if (data.message === 'VALID_TOKEN') {
                dispatch(updateUserInfo(data.user));
                dispatch(signInSuccess());
                dispatch(updateToken(token));
            }
        }).catch(error => {
            console.log('Error when validate token: ', error);
        });
    };
}

export function updateToken(token) {
    return {
        type: ActionTypes.UPDATE_TOKEN,
        token
    };
}

export function fetchOrderHistorySuccess(orderHistory) {
    return {
        type: ActionTypes.FETCH_ORDER_HISTORY_SUCCESS,
        orderHistory
    };
}

export function fetchOrderHistory() {
    return (dispatch, getState) => {
        const { token } = getState().user.authenticate;
        const url = `${serverURL}/user/order-history`;
        axios.post(url, {
            token
        }).then(result => {
            const { data } = result;
            if (data.message === 'SUCCESSFULLY') {
                dispatch(fetchOrderHistorySuccess(data.orderHistory));
            }
        }).catch(error => console.log(`Error while fetching orderHistory: ${error}`));
    };
}

export function fetchProductByTypeSuccess(idType, page, data) {
    return {
        type: ActionTypes.FETCH_PRODUCT_BY_TYPE_SUCCESS,
        idType,
        page,
        data
    };
}

export function fetchProductByType(idType, page) {
    return (dispatch) => {
        const url = `${serverURL}/product/bytype?idType=${idType}&page=${page}`;
        axios.get(url).then(result => {
            const { data } = result;
            console.log(result);
            if (data.message === 'SUCCESS') {
                dispatch(fetchProductByTypeSuccess(idType, page, data.product));
            }
        }).catch(error => console.log('Error while fetching product by type', error));
    };
}

export function fetchProductInCollectionSuccess(page, data) {
    return {
        type: ActionTypes.FETCH_PRODUCT_IN_COLLECTION_SUCCESS,
        page,
        data
    };
}

export function fetchProductInCollection(page) {
    return (dispatch) => {
        const url = `${serverURL}/product/collection?page=${page}`;
        axios.get(url).then(result => {
            const { data } = result;
            console.log(result);
            if (data.message === 'SUCCESS') {
                dispatch(fetchProductInCollectionSuccess(page, data.product));
            }
        }).catch(error => console.log('Error while fetching product by type', error));
    };
}

