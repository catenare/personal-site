import * as React from "react";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom"; // eslint-disable-line
import {Hello} from "./components/Home/Hello";

const AppRoute = () => ( // eslint-disable-line
  <BrowserRouter>
    <main>
      <Switch>
        <Route path="/" exact component={Hello} />
        <Redirect to="/" />
      </Switch>
    </main>
  </BrowserRouter>
)

export {AppRoute};
