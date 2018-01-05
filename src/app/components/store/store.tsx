import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import pages from "../store/reducers/pages";
import {posts} from "../store/reducers/posts";
import users from "../store/reducers/users";
import api from "./middleware/api";

const reducers = combineReducers({users, pages, posts});

const middleware = applyMiddleware(logger, api);

const store = createStore(reducers, middleware);

export default store;
