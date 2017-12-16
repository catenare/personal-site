import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" render = {() => <div>Home Page</div>}/>
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
