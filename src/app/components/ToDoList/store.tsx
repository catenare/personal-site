import {createStore} from "redux";
import {
  addTodo,
  setVisibilityFilter,
  toggleTodo,
} from "./actions";
import C from "./actionTypes";
import todoApp from "./reducers";

const store = createStore(todoApp);

console.log(
  store.getState(),
);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

export default store;
