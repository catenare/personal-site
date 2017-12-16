import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Redirect, Route, Switch } from "react-router-dom"; // eslint-disable-line
// import initialState from "./components/Colors/colors";

import {ReduxApp} from "./components/Colors/ReduxApp";
import storeFactory from "./components/Colors/store";

const store = storeFactory();
// console.log(store.getState());

const AppRoute = (props) => ( // eslint-disable-line
  <HashRouter>
    <main>
      <Switch>
        <Route path="/" render = {() => (
          <Provider store={store}>
            <ReduxApp />
          </Provider>
        )} />
        <Redirect to="/" />
      </Switch>
    </main>
  </HashRouter>
);

export {AppRoute};
