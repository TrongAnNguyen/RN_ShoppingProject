import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    fullName: '',
    address: '',
    phoneNumber: ''
};

export default function info(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_USER_INFO:
        {
            return {
                fullName: action.user.full_name,
                address: action.user.address,
                phoneNumber: action.user.phone_number
            };
        }     
    
        default:
            return state;
    }
}
