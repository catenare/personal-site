import {connect} from "react-redux";
import {toggleTodo} from "./actions";
import C from "./actionTypes";
import ToDoList from "./todolist";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case C.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case C.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    case C.SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);

export default VisibleTodoList;
