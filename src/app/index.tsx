import * as React from "react";
import * as ReactDOM from "react-dom";

import {AppRoute} from "./Router";

import "../scss/app.scss";

const createStore = (reducer) => {
  let state: number;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return {getState, dispatch, subscribe};
};

const counter = (state: number = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      state = state + 1;
      console.log("Increment: ", state, action);
      return state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);
const unsub = store.subscribe( () => console.log(store.getState()));
store.getState();
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});

const el = document.getElementById("blog");

ReactDOM.render (
  <AppRoute />,
  el,
);
