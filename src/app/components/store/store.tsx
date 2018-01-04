import axios from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import {feature, posts} from "../Posts/store/reducers";
import pages from "../store/reducers/pages";
import users from "../Users/store/reducers";
import api from "./middleware/api";

const reducers = combineReducers({feature, users, pages, posts});

const middleware = applyMiddleware(logger, promise(), api);

const store = createStore(reducers, middleware);

export default store;
