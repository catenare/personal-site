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

// store.dispatch(addTodo("learn about actions"));
// store.dispatch(addTodo("learn about reducers"));
// store.dispatch(addTodo("Learn about store"));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(C.SHOW_COMPLETED));

export default store;
