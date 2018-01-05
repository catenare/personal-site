import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Webfont from "webfontloader";
import {AppRoute} from "./Router";

Webfont.load({
  google: {
    families: [
      "Annie Use Your Telescope",
      "PT Sans Narrow",
      "Roboto",
  ],
  },
});

import "../scss/app.scss";

const el = document.getElementById("blog");

// ReactDOM.render (
//   <AppRoute />,
//   el,
// );
