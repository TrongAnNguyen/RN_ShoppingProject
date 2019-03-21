import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    keyWord: '',
    product: {}
};

export default function productByType(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.INPUT_SEARCH_KEYWORD:
        {
            return {
                ...state,
                keyWord: action.keyword
            };
        }
        case ActionTypes.UPDATE_SEARCH_RESULT: 
        {
            return {
                ...state,
                product: {
                    ...action.data
                }
            };
        }
        default:
            return state;
    }
}
