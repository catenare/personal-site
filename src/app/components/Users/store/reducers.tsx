import * as C from "./actions";

export const users = (state: any = {loaded: false, users: []}, action) => {
  switch (action.type) {
    case C.USERS_PENDING:
    return state;
    case C.GET_USERS:
      return state;
    case C.SET_USERS:
    case C.USERS_FULFILLED:
      return Object.assign({}, state, {loaded: true, users: action.payload.data.results});
    default:
      return state;
  }
};

export default users;
