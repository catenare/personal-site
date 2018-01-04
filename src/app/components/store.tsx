import axios from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {feature, posts} from "./Posts/store/reducers";
import users from "./Users/store/reducers";

/**
 * Do actual call to server
 * @param url url for server
 * @param cb callback after getting response
 */
const fetchData = (url, cb) => {
  axios.get(url)
  .then( (response) => {
    this.props.dispatch(cb(response.data));
    this.props.dispatch(cb(response.data));
  })
  .catch((e) => console.log("error", e));
};

const reducers = combineReducers({feature, users, posts});

const middleware = applyMiddleware(logger, promise());

const store = createStore(reducers, middleware);

export default store;
