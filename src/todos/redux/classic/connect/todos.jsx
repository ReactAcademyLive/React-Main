import React, { Component } from "react";
import FilterButtons from "./filter-buttons";
import AddTodo from "./add-todo";
import VisibleTodoList from "./visible-todo-list";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";
import initialTodos from "../../../common/initial-todos";

export default class Todos extends Component {
  store = createStore(rootReducer, { todos: initialTodos }, devToolsEnhancer());

  previousTitle = document.title;

  componentDidMount() {
    document.title = "Todos using classic Redux and connect";
  }

  componentWillUnmount() {
    document.title = this.previousTitle;
  }

  render = () => (
    <Provider store={this.store}>
      <div>
        <h1>Todos (using classic Redux and connect)</h1>
        <AddTodo />
        <FilterButtons />
        <VisibleTodoList />
      </div>
    </Provider>
  );
}
