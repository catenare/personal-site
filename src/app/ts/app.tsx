// import Rx from "rxjs";
import * as React from "react";
import * as ReactDom from "react-dom";
import Users from "../components/Users/Users";

import "../../scss/app.scss";

let siteUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  siteUrl = "https://api.paseo.org.za/johan/";
} else {
  siteUrl = "http://paseo.demo";
}
siteUrl = "https://randomuser.me/api/?results=50&noinfo";

const el = document.getElementById("user-list");

ReactDom.render (
  <Users url={siteUrl} />,
  el,
);
