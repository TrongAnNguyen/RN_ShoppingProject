import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    signup: {
        fullName: '',
        email: '',
        password: '',
        retypePassword: ''
    },
    signin: {
        email: '',
        password: ''
    },
    isLogged: false,
    notification: {
        status: false,
        type: '',
        title: '',
        message: ''
    }, 
    token: ''
};

export default function authenticate(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.INPUT_SIGN_UP_FULL_NAME:
        {
            return {
                ...state,
                signup: {
                    ...state.signup,
                    fullName: action.fullName
                },
                signin: {
                    ...state.signin
                }
            };
        }
        case ActionTypes.INPUT_SIGN_UP_EMAIL:
        {
            return {
                ...state,
                signup: {
                    ...state.signup,
                    email: action.email
                },
                signin: {
                    ...state.signin
                }
            };
        }
        case ActionTypes.INPUT_SIGN_UP_PASSWORD: 
        {
            return {
                ...state,
                signup: {
                    ...state.signup,
                    password: action.password
                },
                signin: {
                    ...state.signin
                }
            };
        }
        case ActionTypes.INPUT_SIGN_UP_RETYPE_PASSWORD:
        {
            return {
                ...state,
                signup: {
                    ...state.signup,
                    retypePassword: action.retypePassword
                },
                signin: {
                    ...state.signin
                }
            };
        }
        case ActionTypes.INPUT_SIGN_IN_EMAIL: 
        {
            return {
                ...state,
                signin: {
                    ...state.signin,
                    email: action.email
                }
            };
        }
        case ActionTypes.INPUT_SIGN_IN_PASSWORD: 
        {
            return {
                ...state,
                signin: {
                    ...state.signin,
                    password: action.password
                }
            };
        }
        case ActionTypes.NOTIFY_SIGNUP_MESSAGE: 
        {
            const notification = {
                status: true,
                type: action.messageType
            };
            switch (action.message) {
                case 'FULL_NAME_CANNOT_EMPTY':
                    notification.title = 'Fullname cannot be empty!';
                    notification.message = 'Please input your fullname.';
                    break;
                case 'EMAIL_CANNOT_EMPTY':
                    notification.title = 'Email cannot be empty!';
                    notification.message = 'Please input your email.';
                    break;
                case 'PASSWORD_CANNOT_EMPTY':
                    notification.title = 'Password cannot be empty!';
                    notification.message = 'Please input your password.';
                    break;
                case 'RETYPE_PASSWORD_CANNOT_EMPTY':
                    notification.title = 'Retype password cannot be empty!';
                    notification.message = 'Please retype your password.';
                    break;
                case 'SIGNUP_RETYPE_PASSWORD_NOT_MATCH':
                    notification.title = 'Retyped password not match';
                    notification.message = 'Please retype your password correctly';
                    break;
                case 'EMAIL_ALREADY_EXISTS':
                    notification.title = 'Email already exists!';
                    notification.message = 'Please choose another email.';
                    break;
                case 'SIGNUP_SUCCESSFULLY':
                    notification.title = 'Signup successfully!';
                    notification.message = 'You can login now.';
                    break;
                case 'UNKNOW_ERROR':
                    notification.title = 'Unknow error!';
                    notification.message = 'Please try again later.';
                    break;
                default:
                    break;
            }
            return {
                ...state,
                notification: {
                    ...notification
                }
            };
        }
        case ActionTypes.NOTIFY_SIGNIN_MESSAGE: 
        {
            const notification = {
                status: true,
                type: action.messageType
            };
            switch (action.message) {
                case 'EMAIL_CANNOT_EMPTY':
                    notification.title = 'Email cannot be empty!';
                    notification.message = 'Please input your email.';
                    break;
                case 'PASSWORD_CANNOT_EMPTY':
                    notification.title = 'Password cannot be empty!';
                    notification.message = 'Please input your password.';
                    break;
                case 'INCORRECT_EMAIL_OR_PASSWORD':
                    notification.title = 'Incorrect email or password!';
                    notification.message = 'Please check your email or password again.';
                    break;
                case 'LOGIN_SUCCESSFULLY':
                    notification.title = 'Login successfully!';
                    notification.message = 'Happy shopping.';
                    break;
                default:
                    notification.title = 'Unknow error!';
                    notification.message = 'Please try again later.';
                    break;
            }
            return {
                ...state,
                notification: {
                    ...notification
                }
            };
        }
        case ActionTypes.CLOSE_AUTHENTICATE_NOTIFICATION: {
            return {
                ...state,
                notification: {
                    status: false,
                    type: '',
                    title: '',
                    message: ''
                }
            };
        }
        case ActionTypes.SIGN_IN_SUCCESS:
        {
            return {
                ...state,
                signin: {
                    ...state.signin,
                    email: '',
                    password: ''
                },
                isLogged: true
            };
        }
        case ActionTypes.SIGN_UP_SUCCESS:
        {
            return {
                ...state,
                signup: {
                    ...state.signup,
                    fullName: '',
                    email: '',
                    password: '',
                    retypePassword: ''
                }
            };
        }
        case ActionTypes.LOGOUT_USER: 
        {
            return {
                ...state,
                isLogged: false
            };
        }
        case ActionTypes.CLEAR_AUTHENTICATE_INPUT:
        {
            return {
                ...state,
                signin: {
                    ...state.signin,
                    email: '',
                    password: ''
                },
                signup: {
                    ...state.signup,
                    fullName: '',
                    email: '',
                    password: '',
                    retypePassword: ''
                }
            };
        }
        case ActionTypes.UPDATE_TOKEN: 
        {
            return {
                ...state,
                token: action.token
            };
        }
        default:
            return state;
    }
}
