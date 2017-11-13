import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppRoute} from "./Router";

import {SetScroll} from "../lib/utils";
// import "../../node_modules/font-awesome/scss/font-awesome.scss";

import "../scss/app.scss";



ReactDOM.render(
  <AppRoute />,
  document.getElementById("root"),
);

window.addEventListener("scroll", (event) => SetScroll(event));
