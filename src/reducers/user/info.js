import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    fullName: '',
    address: '',
    phoneNumber: '',
    inputUpdate: {
        fullName: '',
        address: '',
        phoneNumber: ''
    },
    notification: {
        status: false,
        type: '',
        title: '',
        message: ''
    }
};

export default function info(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_USER_INFO_SUCCESS:
        {
            return {
                ...state,
                fullName: action.user.full_name,
                address: action.user.address,
                phoneNumber: action.user.phone_number
            };
        }     
        case ActionTypes.INPUT_UPDATE_FULLNAME:
        {
            return {
                ...state,
                inputUpdate: {
                    ...state.inputUpdate,
                    fullName: action.fullName
                }
            };
        }
        case ActionTypes.INPUT_UPDATE_ADDRESS:
        {
            return {
                ...state,
                inputUpdate: {
                    ...state.inputUpdate,
                    address: action.address
                }
            };
        }
        case ActionTypes.INPUT_UPDATE_PHONE: 
        {
            return {
                ...state,
                inputUpdate: {
                    ...state.inputUpdate,
                    phoneNumber: action.phoneNumber
                }
            };
        }
        case ActionTypes.NOTIFY_UPDATE_INFO_MESSAGE:
        {
            const notification = {
                status: true,
                type: action.messageType
            };
            switch (action.message) {
                case 'SUCCESS':
                    notification.title = 'Update info successfully!';
                    notification.message = '';
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
        default:
            return state;
    }
}
