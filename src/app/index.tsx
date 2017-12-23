import expect from "expect";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from "redux";

import "../scss/app.scss";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        completed: false,
        id: action.id,
        text: action.text,
      };
    case TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state, completed: !state.completed,
      };
    default:
      return state;
  }
};


const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, todo(undefined, action),
      ];
    case TOGGLE_TODO:
      return state.map((t) => todo(t, action));
    default:
      return state;
  }
};

const testAddTodo = () => {
  const stateBefore = [];
  const action = {
    id: 0,
    text: "Learn Redux",
    type: ADD_TODO,
  };

  const stateAfter = [{
    completed: false,
    id: 0,
    text: "Learn Redux",
  }];

  expect(
    todos(stateBefore, action),
  ).toEqual(stateAfter);
};

testAddTodo();
console.log("All tests passed");
