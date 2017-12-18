import * as React from "react";
import * as ReactDOM from "react-dom";
import Posts from "./components/Posts/posts";

import "../scss/app.scss";

const el = document.getElementById("blog");

ReactDOM.render (
  <Posts />,
  el,
);
