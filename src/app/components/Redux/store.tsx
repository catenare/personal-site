import { applyMiddleware, combineReducers, createStore } from "redux";
import {logger} from "redux-logger";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import v4 from "uuid/v4";
import {
  addColor,
  rateColor,
  removeColor,
  sortColors,
} from "./actions";
import { initialState } from "./initialState";
import api from "./middleware/api";
import { C, colors, sort, users } from "./reducers";

const reducers = combineReducers({colors, sort, users});

const saver: any = (store) => (next) => (action) => {
  const result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const crashReport = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (e) {
    console.error("Caught excpetion!!", e);
  }
};

const middleware = applyMiddleware(crashReport, logger, promise(), saver, api);

// const mystore: any = createStore(reducers,
//   localStorage["redux-store"]
//     ? JSON.parse(localStorage["redux-store"])
//     : initialState, middleware,
// );

const mystore: any = createStore(reducers, initialState, middleware);

export default mystore;
