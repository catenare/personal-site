import * as React from "react";
import {Provider} from "react-redux";
import {HashRouter, Route, Switch } from "react-router-dom"; // eslint-disable-line
import Blog from "../components/Blog";
import PostView from "../components/Posts/PostView";
import store from "../components/store/store";

const AppRoute = (props) => ( // eslint-disable-line
  <Provider store={store} url={props}>
  <HashRouter>
    <main>
      <Switch>
        <Route path="/post" component={PostView} />,
        <Route render={({history}) => <Blog  history={history} {...props}/>} />,
      </Switch>
    </main>
  </HashRouter>
  </Provider>

);

export {AppRoute};
