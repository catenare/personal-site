import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {getUsers, setUser} from "./components/Redux/actions";
import C from "./components/Redux/constants";
import List, {Profile} from "./components/Redux/list";
import store from "./components/Redux/store";

const el = document.getElementById("root");

ReactDOM.render (
  <Provider store={store}>
    <List />
  </Provider>,
  el,
);

const profile = document.getElementById("profile");

ReactDOM.render(
  <Provider store={store}>
    <Profile />
  </Provider>,
  profile,
);


