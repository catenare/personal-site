
import * as React from "react";
import * as ReactDom from "react-dom";
import {Provider} from "react-redux";
import * as Webfont from "webfontloader";
import {setFormData} from "../components/store/actions/actions";
import store from "../components/store/store";
import {AppRoute} from "./Router";

Webfont.load({
  google: {
    families: [
      "Lato",
      "Rubik",
      "Tillana",
    ],
  },
});

// import "./../../scss/site.scss";

// import ContactForm from "../components/Contact";
import {ContactUsForm} from "../components/store/containers/containers";

let baseUrl: string; // eslint-disable-line
let captchaKey: string; // eslint-disable-line
let formDestination: string; // eslint-disable-line
let formUrl: string = "https://7hoyjyn8mc.execute-api.eu-central-1.amazonaws.com/dev"; // eslint-disable-line

if (__IS_PROD__) {
  baseUrl = "https://api.paseo.org.za/johan/";
  captchaKey = "6Lf9T0UUAAAAANR7b7br5GPEanbxvdXPmCqDr6xN";
  formDestination = "martin.johan@johan-martin.com";
  formUrl = "https://gateway.johan-martin.com/addform";

} else {
  baseUrl = "http://paseo.demo/";
  captchaKey = "6Lf9T0UUAAAAANR7b7br5GPEanbxvdXPmCqDr6xN";
  formDestination = "martin.johan@johan-martin.com";
  formUrl = "https://gateway.johan-martin.com/addform";
}

const posts = document.getElementById("posts");
const contact = document.getElementById("contact-me");

// ReactDom.render (
//   <AppRoute url={baseUrl}/>,
//   posts,
// );

store.dispatch(setFormData(captchaKey, formUrl, formDestination));

ReactDom.render (
  <Provider store={store}>
  <ContactUsForm />
  </Provider>,
  contact,
);
