import * as React from "react";
import { AddColorForm } from "./colorform";
import { ColorList } from "./colorlist";

class App extends React.Component<any, any> {
 constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
  }

  public render() {
    const{colors} = this.state;
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    );
  }
}

export {App};
