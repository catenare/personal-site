import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line
import Posts from "./components/Posts/posts";
import Store from "./components/Posts/store";
import Root from "./components/Reddit/containers/Root";

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        {/* <Route path="/" render = {() => <Posts />}/>, */}
        <Route path="/" component={Root} />
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
