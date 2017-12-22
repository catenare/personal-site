import * as React from "react";
import * as ReactDOM from "react-dom";
// import Posts from "./components/Posts/posts";
import {AppRoute} from "./Router";

import "../scss/app.scss";

const el = document.getElementById("blog");

ReactDOM.render (
  <AppRoute />,
  el,
);
