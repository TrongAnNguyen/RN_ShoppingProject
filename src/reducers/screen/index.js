import * as ActionTypes from './../../constants/ActionTypes';

const initialState = {
    selectedTab: 'Home'
};

export default function info(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_TAB_NAVIGATOR:
        {
            return {
                selectedTab: action.selectedTab
            };
        }
        default:
            return state;
    }
}
