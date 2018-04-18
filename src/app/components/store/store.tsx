import {applyMiddleware, combineReducers, createStore} from "redux";
import {captcha} from "../store/reducers/captcha";
import pages from "../store/reducers/pages";
import {post, posts} from "../store/reducers/posts";
import api from "./middleware/api";

const reducers = combineReducers({pages, post, posts, captcha});

// const composeEnhancers = composeWithDevTools({});
const middleware = applyMiddleware(api);

const store = createStore(reducers, middleware);

export default store;
