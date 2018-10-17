import { combineReducers } from 'redux';
import ui from './ui';
import posts from './posts';

export default combineReducers({
    ui,
    posts
});