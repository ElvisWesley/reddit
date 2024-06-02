import { combineReducers } from 'redux';
import { FETCH_POSTS, SET_SEARCH_TERM, SET_CATEGORY_FILTER } from '../actions';

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

const categoryFilter = (state = '', action) => {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  searchTerm,
  categoryFilter,
});
