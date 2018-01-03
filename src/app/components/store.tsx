import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from "redux-logger";
import {feature, posts} from "./Posts/store/reducers";
import users from "./Users/store/reducers";

const reducers = combineReducers({feature, users, posts});

const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);

export default store;
