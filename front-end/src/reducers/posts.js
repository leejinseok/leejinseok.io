import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/postActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};


export default function posts (state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS_BEGIN:
    console.log('[FETCH_POSTS_BEGIN]');
    return {
      ...state,
      loading: true,
      error: null
    };
    
    case FETCH_POSTS_SUCCESS:
    console.log('[FETCH_POSTS_SUCCESS]');
    return {
      ...state,
      loading: false,
      items: action.payload.posts.data
    };
    
    case FETCH_POSTS_FAILURE:
    console.log('[FETCH_POSTS_FAILURE]');
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      items: []
    };
    
    default:
    return state;
  }
}