import * as C from "../constants";

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
    case C.SET_PAGES:
      return Object.assign(
        {},
        state,
        {pages: action.payload.pages, loaded: true},
      );
    case C.GET_PAGES:
      return state;
    case C.PAGES_PENDING:
      return Object.assign(
        {},
        state,
        {loading: true},
      );
    default:
      return state;
  }
};

export default pages;
