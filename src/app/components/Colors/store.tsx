import {applyMiddleware, combineReducers, createStore} from "redux";
import initialData from "./colors";
import {colors, sort} from "./reducers";

const logger: any = (store) => (next) => (action) => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const saver: any = (store) => (next) => (action) => {
  const result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const storeFactory: any = (initialState = initialData) =>
  applyMiddleware(logger, saver)(createStore)(combineReducers({colors, sort}),
  (localStorage["redux-store"]) ? JSON.parse(localStorage["redux-store"]) : initialData,
);

export default storeFactory;
