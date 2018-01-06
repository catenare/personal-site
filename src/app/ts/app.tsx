import axios from "axios";
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import * as Webfont from "webfontloader";
import {PageList, PostList} from "../components/store/containers/containers";
import store from "../components/store/store";
// import UserList from "../components/Users/store/containers";

Webfont.load({
  google: {
    families: [
      "Annie Use Your Telescope",
      "PT Sans Narrow",
      "Roboto",
  ],
  },
});

import "../../scss/app.scss";

let baseUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  baseUrl = "https://api.paseo.org.za/johan/";
} else {
  baseUrl = "http://paseo.demo/";
}

// const baseUrl = "https://demo.wp-api.org/";

const posts = document.getElementById("posts");
const pages = document.getElementById("pages");

ReactDom.render (
  <Provider store={store}>
    <PostList url={baseUrl} />
  </Provider>,
  posts,
);

ReactDom.render (
  <Provider store={store}>
    <PageList url={baseUrl} />
  </Provider>,
  pages,
);
