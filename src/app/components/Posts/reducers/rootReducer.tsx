import {combineReducers} from "redux";
import * as C from "../actions";

const posts = (state, action) => {
  switch (action.type) {
    case C.GET_POSTS:
      return state;
    case C.SET_POSTS:
      return state;
    default:
      return state;
  }
};

const post = (state, action) => {
  switch (action.type) {
    case C.GET_POST:
      return state;
    default:
      return state;
  }
};

const featurePost = (state, action) => {
  switch (action.type) {
    case C.GET_FEATURE_POST:
      return state;
    case C.SET_FEATURE_POST:
      return state;
    default:
      return state;
  }
};

const paging = (state, action) => {
  switch (action.type) {
    case C.GET_CURRENT_PAGE:
      return state;
    case C.SET_CURRENT_PAGE:
      return state;
    case C.SET_PAGE_COUNT:
      return state;
    case C.GET_PAGE_COUNT:
      return state;
    default:
      return state;
  }
};

const reducers = combineReducers(
  {
    featurePost,
    paging,
    post,
    posts,
  },
);

export default reducers;
