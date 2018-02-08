
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import {setCaptcha} from "../components/store/actions/actions";
import store from "../components/store/store";
import "../js/util";
import {AppRoute} from "./Router";

// import ContactForm from "../components/Contact";
import {ContactUsForm} from "../components/store/containers/containers";

let baseUrl: string; // eslint-disable-line
let captchaKey: string; // eslint-disable-line
let formUrl: string; // eslint-disable-line

if (__IS_PROD__) {
  baseUrl = "https://api.paseo.org.za/johan/";
} else {
  baseUrl = "http://paseo.demo/";
  captchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  formUrl = "http://localhost:5000/form";
}

const posts = document.getElementById("posts");
const contact = document.getElementById("contact-me");

// ReactDom.render (
//   <AppRoute url={baseUrl}/>,
//   posts,
// );

store.dispatch(setCaptcha(captchaKey, formUrl));

ReactDom.render (
  <Provider store={store}>
  <ContactUsForm />
  </Provider>,
  contact,
);
