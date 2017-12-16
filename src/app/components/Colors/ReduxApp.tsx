import * as React from "react";
import {Colors, Menu, NewColor} from "./containers";

const ReduxApp: any = ({store}) => {

return(
  <div className="app">
    <Menu />
    <NewColor />
    <Colors />
</div>);
};
export {ReduxApp};
