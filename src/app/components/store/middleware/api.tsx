import axios from "axios";
import * as C from "../constants";

/**
 * Retrieve data from axios when necessary.
 * @param param0
 */
const api = ({dispatch, getState}) => (next) => (action) => {
  if ( (action.type !== C.API)) {
    return next(action);
  }

  const { url, success } = action.payload;
  axios(url).then((response) => {
      dispatch(success(response.data));
    });
  next(action);
};

export default api;
