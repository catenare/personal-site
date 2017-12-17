import * as React from "react";
import AddToDo from "./addtodo";
import Footer from "./footer";
import VisibleTodoList from "./VisibleTodoList";

const App = () => (
  <div>
    <AddToDo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
