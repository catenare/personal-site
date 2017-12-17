export const C = {
  ADD_COLOR: "ADD_COLOR",
  FETCH_POSTS: "FETCH_POSTS",
  POSTS_FULFILLED: "POSTS_FULFILLED",
  POSTS_PENDING: "POSTS_PENDING",
  POSTS_REJECTED: "POSTS_REJECTED",
  RATE_COLOR: "RATE_COLOR",
  RECEIVE_ERROR: "RECEIVE_ERROR",
  RECEIVE_POSTS: "RECEIVE_POSTS",
  REMOVE_COLOR: "REMOVE_COLOR",
  SORT_COLORS: "SORT_COLORS",
};

export const color = (state: any = {}, action) => {
  const payload = action.payload;
  switch (action.type) {

    case C.ADD_COLOR:
      return {
        color: payload.color,
        id: payload.id,
        rating: 0,
        timestamp: payload.timestamp,
        title: payload.title,
      };
    case C.RATE_COLOR:
      return (state.id !== payload.id) ?
      state : { ...state, rating: payload.rating};
    default:
      return state;
    }
};

export const colors = (state = [], action) => {

  switch (action.type) {
    case C.ADD_COLOR:
      return [
        ...state,
        color({}, action),
      ];
    case C.RATE_COLOR:
      return state.map(
        (c) => color(c, action),
      );
    case C.REMOVE_COLOR:
      return state.filter(
        (c) => (c.id !== action.payload.id),
      );
    default:
      return state;
  }
};

export const sort = (state = "SORTED_BY_DATE", action ) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};

const initialState = {
  error: null,
  fetched: false,
  fetching: false,
  users: [],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case C.POSTS_PENDING:
    {
      return {...state, fetching: true};
    }
  case C.POSTS_REJECTED: {
    return {...state, fetching: false, error: action.payload};
  }
  case C.POSTS_FULFILLED: {
    return {...state, fetching: false, fetched: true, users: action.payload};
  }
  default:
    return state;
  }
};
