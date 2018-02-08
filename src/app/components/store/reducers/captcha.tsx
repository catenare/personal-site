import * as C from "../../store/constants";

const initialState = {
  captcha: {},
};

export const captcha = (state = {}, action) => {
  switch (action.type) {
    case C.SET_CAPTCHA:
      return Object.assign({}, state, action.payload);
    case C.GET_CAPTCHA:
      return state;
    default:
      return state;
  }
};
