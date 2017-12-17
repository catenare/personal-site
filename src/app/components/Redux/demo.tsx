import {combineReducers, createStore} from "redux";
import {colors, sort} from "./reducers";

const store = createStore(combineReducers({colors, sort}));

console.log(store.getState());

export {store};
