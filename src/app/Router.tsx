import * as React from "react";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line
import {AddColorForm} from "./components/Colors/colorform";
import {Hello} from "./components/Home/Hello";

// import {list} from "./components/Ingredients/ingredients";

const AppRoute = () => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Route path="/color" component={AddColorForm} />
        <Redirect to="/" />
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
