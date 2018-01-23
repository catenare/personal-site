import * as React from "react";
import * as ReactDom from "react-dom";;
import {AppRoute} from "./Router";
import "../js/util";


// import UserList from "../components/Users/store/containers";


let baseUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  baseUrl = "https://api.paseo.org.za/johan/";
} else {
  baseUrl = "http://paseo.demo/";
}

// const baseUrl = "https://demo.wp-api.org/";

const posts = document.getElementById("posts");
// const pages = document.getElementById("pages");

ReactDom.render (
  <AppRoute url={baseUrl}/>,
  posts,
);

// ReactDom.render (
//   <Provider store={store}>
//     <PageList url={baseUrl} />
//   </Provider>,
//   pages,
// );
