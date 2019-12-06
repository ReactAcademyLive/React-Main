import React, { useRef } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../connect/slices/reducer';
import initialTodos from '../../../common/initial-todos';

export default function Todos() {
  React.useEffect(() => {
    let savedTitle = document.title;
    document.title = 'Todos using Redux Toolkit and Hooks';
    return () => {
      document.title = savedTitle;
    };
  }, []);

  let store = useRef();

  if (!store.current) {
    store.current = configureStore({
      reducer: rootReducer,
      preloadedState: { todos: initialTodos },
    });
  }

  return (
    <Provider store={store.current}>
      <div>
        <h1>Todos (using Redux Toolkit and Hooks)</h1>
        <AddTodo />
        <FilterButtons />
        <VisibleTodoList />
      </div>
    </Provider>
  );
}
