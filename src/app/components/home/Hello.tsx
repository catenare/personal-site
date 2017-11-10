import * as React from "react";
import "./Hello.scss";

class Hello extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div id="hello"><h1>Hello World Basic! Test with scss</h1></div>;
  }
}

export {Hello};
