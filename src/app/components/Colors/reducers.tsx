import C from "./constants";

export const color = (state: any = {}, action) => {
  switch (action.type) {
    case C.ADD_COLOR:
      return {
        color: action.color,
        id: action.id,
        rating: 0,
        timestamp: action.timestamp,
        title: action.title,
      };
    case C.RATE_COLOR:
      return (state.id !== action.id) ? state : {...state, rating: action.rating};
    default:
      return state;
  }
};

export const colors = (state: any = [], action: any) => {
  switch (action.type) {
    case C.ADD_COLOR :
      return [
        ...state,
        color({}, action),
      ];
    case C.RATE_COLOR :
      return state.map(
        (c) => color(c, action),
      );
    case C.REMOVE_COLOR :
      return state.filter(
        (c) => c.id !== action.id,
      );
    default:
      return state;
  }
};

export const sort = (state = "SORTED_BY_DATE", action: any) => {
  switch (action.type) {
    case C.SORT_COLORS:
      return action.sortBy;
    default:
      return state;
  }
};
