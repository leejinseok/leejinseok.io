import axios from 'axios';

export function fetchPosts () {
  return dispatch => {
    dispatch(fetchPostsBegin());
      return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(handleErrors)
      .then(data => {
          dispatch(fetchPostsSuccess(data));
          return data;
      })
      .catch(error => dispatch(fetchPostsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors (response) {
  if (response.status !== 200) {
      throw Error(response.statusText);
  }
  return response;
}

export const FETCH_POSTS_BEGIN   = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: { posts }
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: { error }
});
