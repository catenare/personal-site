import * as C from "../../store/constants";

export const users = (state: any = {loaded: false, users: []}, action) => {
  switch (action.type) {
    case C.USERS_PENDING:
    return state;
    case C.GET_USERS:
      return state;
    case C.SET_USERS:
    case C.USERS_FULFILLED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default users;
