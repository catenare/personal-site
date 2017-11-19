import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppRoute} from "./Router";

// import {SetScroll} from "../lib/utils";

import "../lib/utils.css";
import "../scss/app.scss";

ReactDOM.render(
  <AppRoute />,
  document.getElementById("blog"),
);

// window.addEventListener("scroll", (event) => SetScroll(event));
