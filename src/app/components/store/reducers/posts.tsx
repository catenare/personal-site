import * as C from "../../store/constants";

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  post: {},
  posts: [],

};

/**
 * Get and set all posts
 * @param state array
 * @param action string
 */
export const posts = (state = initialState, action) => {
  switch (action.type) {
    case C.POSTS_FULFILLED:
    case C.SET_POSTS:
      return Object.assign({}, state, action.payload);
    case C.GET_POSTS:
      return state;
    case C.GET_POST:
      return state;
    case C.SET_POST:
      return Object.assign({}, state, action.payload);
    case C.POSTS_PENDING:
    default:
      return state;
  }
};

/**
//  * Current post
//  * @param state object
//  * @param action string
//  */
// export const post = (state = {}, action) => {
//   switch (action.type) {
//     case C.GET_POST:
//       return state;
//     case C.SET_POST:
//       return Object.assign({}, state, action.payload.post);
//     default:
//       return state;
//   }
// };

export default posts;
