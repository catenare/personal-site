import * as React from "react";
import * as ReactDOM from "react-dom";
import v4 from "uuid/v4";

import { applyMiddleware, combineReducers, createStore } from "redux";
import {logger} from "redux-logger";
import {
  addColor,
  rateColor,
  removeColor,
  sortColors,
} from "./components/Redux/actions";
import { initialState } from "./components/Redux/initialState";
import { C, colors, sort } from "./components/Redux/reducers";

import "../scss/app.scss";

const reducers = combineReducers({colors, sort});

// const logger: any = (store) => (next) => (action) => {
//   let result;
//   console.groupCollapsed("dispatching", action.type);
//   console.log("prev state", store.getState());
//   console.log("Action", action);
//   result = next(action);
//   console.log("next state", store.getState());
//   console.groupEnd();
// };

const saver: any = (store) => (next) => (action) => {
  const result = next(action);
  localStorage["redux-store"] = JSON.stringify(store.getState());
  return result;
};

const store: any = createStore(reducers,
  localStorage["redux-store"]
    ? JSON.parse(localStorage["redux-store"])
    : initialState, applyMiddleware(logger, saver),
);

store.dispatch(addColor( "Party Pink", "#F142FF"));
store.dispatch(rateColor("752209b7-f0be-42c6-a38f-c440aebc9cea", 5));
store.dispatch(removeColor("58d9caee-6ea6-4d7b-9984-65b145031979"));
