import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppRoute} from "./Router";

import chai from "chai";

const foo = "string";

chai.assert.typeOf(foo, "string", "foo is a string");

import "../scss/app.scss";

const el = document.getElementById("blog");

ReactDOM.render (
  <AppRoute />,
  el,
);
