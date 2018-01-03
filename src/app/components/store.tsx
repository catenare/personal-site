import {combineReducers, createStore} from "redux";
import {feature, posts} from "./Posts/store/reducers";
import users from "./Users/store/reducers";

const reducers = combineReducers({feature, users, posts});

const store = createStore(reducers);

export default store;
