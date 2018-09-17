import * as types from './ActionTypes';

export function toggleSidebar () {
    return {
        type: types.TOGGLE_SIDEBAR
    }
}

export function hideSidebar () {
    return {
        type: types.HIDE_SIDEBAR
    }
}

// export function addPost () {
//     return {
//         type: types.ADD_POST
//     }
// }

// export function setColor (color) {
//     return {
//         type: types.SET_COLOR
//     }
// }