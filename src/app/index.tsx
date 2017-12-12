
import * as React from "react";
import * as ReactDOM from "react-dom";
// import {AppRoute} from "./Router";
import {AddColorForm} from "./components/Colors/colorform";

import "../lib/utils.css";
import "../scss/app.scss";

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`) // tslint:disable-line

ReactDOM.render(
  <AddColorForm onNewColor={logColor} />,
  document.getElementById("root"),
);
