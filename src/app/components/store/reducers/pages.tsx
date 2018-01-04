import * as actions from "../actions/actions";

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  pages: [],
};

/**
 * Get and set all posts
 * @param state array
 * @param action string
 */
export const pages = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PAGES:
      return Object.assign(
        {},
        state,
        {pages: action.payload.pages, loaded: true},
      );
    case actions.GET_PAGES:
      return state;
    case actions.PAGES_PENDING:
      return Object.assign(
        {},
        state,
        {loading: true},
      );
    default:
      return state;
  }
};

// export const pages = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.SET_PAGES:
//       return Object.assign({}, state, action.payload);
//     case actions.GET_PAGES:
//       return state;
//     default:
//       return state;
//   }
// };

export default pages;
