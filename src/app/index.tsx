
import * as React from "react";
import * as ReactDOM from "react-dom";
// import {list} from "./components/Ingredients/ingredients";
import {AddColorForm, colorForm} from "./components/Ingredients/addcolorform";
// import {AppRoute} from "./Router";

// import {SetScroll} from "../lib/utils";

import "../lib/utils.css";
import "../scss/app.scss";

// ReactDOM.render(
//   <AppRoute />,
//   document.getElementById("root"),
// );

ReactDOM.render(colorForm, document.getElementById("react-container"));
