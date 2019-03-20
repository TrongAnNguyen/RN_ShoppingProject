import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    data: {}
};

export default function orderHistory(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_ORDER_HISTORY_SUCCESS:
        {
            return {
                ...state,
                data: {
                    ...action.orderHistory
                }
            };
        }     
    
        default:
            return state;
    }
}
