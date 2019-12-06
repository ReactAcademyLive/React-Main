import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices/reducer';
import initialTodos from '../../../common/initial-todos';

export default class Todos extends Component {
  store = configureStore({
    reducer: rootReducer,
    preloadedState: { todos: initialTodos },
  });

  previousTitle = document.title;

  componentDidMount() {
    document.title = 'Todos using Redux ToolKit and connect';
  }

  componentWillUnmount() {
    document.title = this.previousTitle;
  }

  render = () => (
    <Provider store={this.store}>
      <div>
        <h1>Todos (using Redux Toolkit and connect)</h1>
        <AddTodo />
        <FilterButtons />
        <VisibleTodoList />
      </div>
    </Provider>
  );
}
