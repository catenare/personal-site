import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {getUsers} from "./components/Redux/actions";
import {list} from "./components/Redux/list";
// import store from "./components/Redux/store";
import App from "./components/ToDoList/app";
import store from "./components/ToDoList/store";
// console.log(store.getState());

import "../scss/app.scss";

// store.dispatch(getUsers("https://randomuser.me/api/?results=20"));
const el = document.getElementById("root");

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>, el,
);
