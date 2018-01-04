import axios from "axios";
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import * as Webfont from "webfontloader";
import {PageList, PostList, UserList} from "../components/store/containers/containers";
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

let siteUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  siteUrl = "https://api.paseo.org.za/johan/";
} else {
  siteUrl = "http://paseo.demo";
}
siteUrl = "https://randomuser.me/api/";

// const postUrl = "http://paseo.demo/wp-json/wp/v2/posts?_embed";
const baseUrl = "http://paseo.demo/";

const users = document.getElementById("user-list");
const posts = document.getElementById("posts");
const pages = document.getElementById("pages");

ReactDom.render (
  <Provider store={store}>
    <UserList url={siteUrl} />
  </Provider>,
  users,
);

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
