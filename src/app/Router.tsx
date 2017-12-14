import * as React from "react";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line

import {App} from "./components/Colors/app";
import {AddColorForm} from "./components/Colors/colorform";
import {colors} from "./components/Colors/colors";
import {Hello} from "./components/Home/Hello";

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`) // tslint:disable-line

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/color"  render = {() => (
          <AddColorForm onNewColor={logColor} />
        ) } />
        <Route path="/colors" render = {() => (
          <App colors={colors} />
        )} />
        <Redirect to="/" />
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
