
import * as React from "react";
import * as ReactDOM from "react-dom";
// import {list} from "./components/Ingredients/ingredients";
// import {AddColorForm, colorForm, StatelessForm} from "./components/Ingredients/addcolorform";
// import {AppRoute} from "./Router";

// import {SetScroll} from "../lib/utils";

import {StarRating} from "./components/Ingredients/stars"

import "../lib/utils.css";
import "../scss/app.scss";

// ReactDOM.render(
//   <AppRoute />,
//   document.getElementById("root"),
// );

// ReactDOM.render(colorForm, document.getElementById("react-container"));
ReactDOM.render(
  <StarRating totalStars={7} starsSelected={3} />,
  document.getElementById("root"),
);
