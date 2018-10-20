import {
  CHANGE_META
} from '../actions/metaActions';

const initialState = {
  title: 'leejinseok.io',
  description: 'leejinseok.io',
  canonical: 'http://www.leejinseok.io',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'react,meta,document,html,tags'
      }
  }
}

export default function meta (state = initialState, action) {
  switch(action.type) {
    case CHANGE_META:
    return action.payload;
    default:
    return state;
  }
}