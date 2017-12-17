export const C = {
  ADD_COLOR: "ADD_COLOR",
  RATE_COLOR: "RATE_COLOR",
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
