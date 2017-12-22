import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line
import Posts from "./components/Posts/posts";

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" render = {() => <Posts />}/>
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
