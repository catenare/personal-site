import * as React from "react";
import * as ReactDOM from "react-dom";
import {Hello} from "./components/home/Hello";

import "../scss/app.scss";

class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() { return <Hello />; }
}

ReactDOM.render(
  <Main />,
  document.getElementById("root"),
);
