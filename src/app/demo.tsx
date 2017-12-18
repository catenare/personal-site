import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {getUsers} from "./components/Redux/actions";
import C from "./components/Redux/constants";
import List from "./components/Redux/list";
import store from "./components/Redux/store";

// import "./components/Redux/style.scss";

store.dispatch(getUsers(C.URL));

const el = document.getElementById("root");

ReactDOM.render (
  <Provider store={store}>
    <List />
  </Provider>,
  el,
);
