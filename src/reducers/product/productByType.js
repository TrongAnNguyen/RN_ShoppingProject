import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {};

export default function productByType(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCT_BY_TYPE_SUCCESS:
            return {
                ...state,
                [action.idType]: {
                    ...state[action.idType],
                    [action.page]: {
                        ...action.data
                    }
                }
            };

        default:
            return state;
    }
}
