import { combineReducers } from 'redux';
import ui from './ui';
import posts from './posts';
import meta from './meta';

export default combineReducers({
    ui,
    posts,
    meta
});