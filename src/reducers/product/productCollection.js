import * as ActionTypes from '../../constants/ActionTypes';

const initialState = {};

export default function productCollection(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCT_IN_COLLECTION_SUCCESS:
            return {
                ...state,
                [action.page]: {
                    ...action.data
                }
            };

        default:
            return state;
    }
}
