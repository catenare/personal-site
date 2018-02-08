import {applyMiddleware, combineReducers, createStore} from "redux";
// import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import {captcha} from "../store/reducers/captcha";
import pages from "../store/reducers/pages";
import {post, posts} from "../store/reducers/posts";
import api from "./middleware/api";

const reducers = combineReducers({pages, post, posts, captcha});

// const composeEnhancers = composeWithDevTools({});
const middleware = applyMiddleware(logger, api);

const store = createStore(reducers, middleware);

export default store;
