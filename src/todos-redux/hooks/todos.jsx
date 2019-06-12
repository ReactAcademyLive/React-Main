import React, { useRef } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default function Todos() {
  React.useEffect(
    ()=> {
      let savedTitle= document.title;
      document.title="Todos!"
    return () => {document.title=savedTitle;}
    }
  , []);
  
  let store = useRef( );

  if (!store.current) {
    store.current = createStore(
      rootReducer,
      { todos: [] },
      devToolsEnhancer())
  } 



  return (
    <Provider store={store.current}>
      <div >
        <h1>Todos (using Redux and hooks)</h1>
        <AddTodo />
        <FilterButtons />
        <VisibleTodoList />
      </div>
    </Provider>
  );
}



