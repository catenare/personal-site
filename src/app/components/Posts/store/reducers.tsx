import * as C from "./actions";

/**
 * Get and set all posts
 * @param state array
 * @param action string
 */
function posts(state, action) {
  switch (action.type) {
    case C.ADD_POSTS:
      return state;
    case C.GET_POSTS:
      return state;
    case C.GET_POST:
      return state;
    case C.GET_FEATURED_POST:
      return state;
    case C.SET_FEATURED_POST:
      return state;
    default:
      return state;
  }
}

/**
 * Current post
 * @param state object
 * @param action string
 */
function post(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Get and set the feature post
 * @param state object
 * @param action string
 */
function feature(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}
