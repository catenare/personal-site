import * as C from "./actions";

/**
 * Get and set all posts
 * @param state array
 * @param action string
 */
export const posts = (state = [], action) => {
  switch (action.type) {
    case C.SET_POSTS:
      return Object.assign({}, state, action.payload);
    case C.GET_POSTS:
      return state;
    default:
      return state;
  }
};

/**
 * Current post
 * @param state object
 * @param action string
 */
export const post = (state = {}, action) => {
  switch (action.type) {
    case C.GET_POST:
      return state;
    default:
      return state;
  }
};

/**
 * Get and set the feature post
 * @param state object
 * @param action string
 */
export const feature = (state = {loaded: false, post: {}}, action) => {
  switch (action.type) {
    case C.SET_FEATURED_POST:
      return Object.assign({}, state, action.payload);
    case C.GET_FEATURED_POST:
      return state;
    default:
      return state;
  }
};
