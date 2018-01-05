import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line
import Posts from "./components/Posts/posts";
import Store from "./components/Posts/store";

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" component={Posts} />,
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
