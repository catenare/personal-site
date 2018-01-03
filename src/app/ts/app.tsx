// import Rx from "rxjs";
import axios from "axios";
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import * as Webfont from "webfontloader";
import * as actions from "../components/Users/store/actions";
import UserList from "../components/Users/store/containers";
import store from "../components/Users/store/store";



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
siteUrl = "https://randomuser.me/api/?results=50&noinfo";

/*
axios.get(this.props.url)
      .then((response) => {
        this.setState({users: response.data.results});
        this.setState({loaded: true});
      }).catch( (e) => console.log("error", e));
*/
axios.get(siteUrl)
      .then( (response) => {
        store.dispatch(actions.setUsers(response.data.results));
      } )
      .catch((e) => console.log("error", e));

store.dispatch(actions.getUsers());

const el = document.getElementById("user-list");

ReactDom.render (
  <Provider store={store}>
    <UserList />
  </Provider>,
  el,
);
