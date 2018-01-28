import * as React from "react";
import * as ReactDom from "react-dom";;
import "../js/util";
import {AppRoute} from "./Router";

// import UserList from "../components/Users/store/containers";

let baseUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  baseUrl = "https://api.paseo.org.za/johan/";
} else {
  baseUrl = "http://paseo.demo/";
}

// const baseUrl = "https://demo.wp-api.org/";

const posts = document.getElementById("posts");

ReactDom.render (
  <AppRoute url={baseUrl}/>,
  posts,
);
