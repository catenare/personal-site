import * as C from "./actions";

export const users = (state: any = {loaded: false, users: []}, action) => {
  switch (action.type) {
    case C.GET_USERS:
      return state;
    case C.SET_USERS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default users;
