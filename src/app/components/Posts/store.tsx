
import axios from "axios";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import * as C from "./actions";
import rootReducer from "./reducers/rootReducer";

const fetchData = (url) => {
  return axios(url);
};

const apiMiddleWare = ({dispatch})  => (next) => (action) => {
  if (action.type !== C.GET_POSTS ) {
    return next(action);
  }
};

const middleWare = applyMiddleware(createLogger);
const store = createStore(rootReducer, middleWare);

export default store;
