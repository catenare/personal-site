import Rx from "rxjs";

import "../../scss/app.scss";

let siteUrl: string; // eslint-disable-line
if (__IS_PROD__) {
  siteUrl = "https://api.paseo.org.za/johan/";
} else {
  siteUrl = "http://paseo.demo";
}

Rx.Observable.of(1, 2, 3);

console.log("Site Url: ", siteUrl);
