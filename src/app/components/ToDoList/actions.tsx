import C from "./actionTypes";

export const addTodo = (text) => {
  return {
    text,
    type: C.ADD_TODO,
  };
};

export const toggleTodo = (index) => {
  return {
    index,
    type: C.TOGGLE_TODO,
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    filter,
    type: C.SET_VISIBILITY_FILTER,
  };
};
