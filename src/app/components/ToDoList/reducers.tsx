import {combineReducers} from "redux";
import C from "./actionTypes";

const initialState = {
  todos: [],
  visibilityFilter: C.SHOW_ALL,
};

const todos = (state = [], action) => {
  switch (action.type) {
    case C.ADD_TODO:
      return [
        ...state,
        {
          completed: false,
          text: action.text,
        },
      ];
    case C.TOGGLE_TODO:
      return state.map((todo, index) => {
        if ( index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    default:
      return state;
  }
};

const visibilityFilter = (state = C.SHOW_ALL, action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
