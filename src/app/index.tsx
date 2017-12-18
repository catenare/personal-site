import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";

import App from "./components/ToDoList/app";
import store from "./components/ToDoList/store";

import "../scss/app.scss";

const el = document.getElementById("root");

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>, el,
);
