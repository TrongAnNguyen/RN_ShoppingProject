import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    data: [],
    isFetching: false,
    error: false
};

export default function allTypesReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCHING_PRODUCT_TYPE:
            return {
                ...state,
                isFetching: true
            };
        case ActionTypes.FETCHING_PRODUCT_TYPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.data
            };

        default:
            return state;
    }
}
