import * as React from "react";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line

import {combineReducers, createStore} from "redux";
import {colors, sort} from "./components/Colors/reducers";

import initialState from "./components/Colors/colors";

import {App} from "./components/Colors/app";
import {AddColorForm} from "./components/Colors/colorform";
import {Hello} from "./components/Home/Hello";

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`) // tslint:disable-line

const store: any = createStore(
  combineReducers({colors, sort}),
  initialState,
);

console.log(store.getState().colors.length);
console.log(store.getState().sort);

store.dispatch({
  color: "#F142FF",
  id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
  timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)",
  title: "Party Pink",
  type: "ADD_COLOR",
});

console.log(store.getState().colors.length);

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/color"  render = {() => (
          <AddColorForm onNewColor={logColor} />
        ) } />
        <Route path="/colors" render = {() => (
          <App colors={initialState} />
        )} />
        <Redirect to="/" />
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
