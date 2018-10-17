import * as types from '../actions/globalActions';

const initialState = {
    sidebar: false
};

export default function ui (state = initialState, action) {
    if (action.type === types.TOGGLE_SIDEBAR) {
        return {
            ...state,
            sidebar: !state.sidebar
        };
    } 
    else if (action.type === types.HIDE_SIDEBAR) {
        return {
            ...state,
            sidebar: false
        }
    }
    else {
        return state;
    }
}