// import Rx from "rxjs";
import axios from "axios";
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import * as Webfont from "webfontloader";
import * as postActions from "../components/Posts/store/actions";
import PostList from "../components/Posts/store/containers";
import store from "../components/store";
import * as actions from "../components/Users/store/actions";
import UserList from "../components/Users/store/containers";

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

console.log("environment", process.env.NODE_ENV);

let siteUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  siteUrl = "https://api.paseo.org.za/johan/";
} else {
  siteUrl = "http://paseo.demo";
}
siteUrl = "https://randomuser.me/api/?results=50&noinfo";

const postUrl = "http://paseo.demo/wp-json/wp/v2/posts?_embed";

const users = document.getElementById("user-list");
const posts = document.getElementById("posts");

ReactDom.render (
  <Provider store={store}>
    <UserList url={siteUrl} />
  </Provider>,
  users,
);

ReactDom.render (
  <Provider store={store}>
    <PostList url={postUrl} />
  </Provider>,
  posts,
);
