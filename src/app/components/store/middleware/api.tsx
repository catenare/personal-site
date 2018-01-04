import axios from "axios";
import * as actions from "../actions/actions";

/**
 * Retrieve data from axios when necessary.
 * @param param0
 */
const api = ({dispatch, getState}) => (next) => (action) => {

  if (action.type !== actions.API) {
    return next(action);
  }

  const { url, success } = action.payload;
  axios(url).then((response) => {
    dispatch(success(response.data));
  });
};

export default api;
