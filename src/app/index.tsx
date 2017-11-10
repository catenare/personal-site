import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppRoute} from "./Router";

import {SetScroll} from "../lib/utils";
// import "../../node_modules/font-awesome/scss/font-awesome.scss";

import "../scss/app.scss";

SetScroll();

ReactDOM.render(
  <AppRoute />,
  document.getElementById("root"),
);

/*
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom' // eslint-disable-line
import AppRoute from './components/Blog/Router' // eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import jQuery from 'jquery' //eslint-disable-line

ReactDOM.render(
  <AppRoute />, document.getElementById('app')
)
 */
