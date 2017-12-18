import C from "../constants";

const api = ({dispatch, getState}) => (next) => (action) => {
  if (action.type === "POSTS") {
    console.log("API Action:", action);
    next(action);
  } else {
    next(action);
  }
};

export default api;
