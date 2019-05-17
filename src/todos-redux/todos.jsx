import React, { Component } from 'react';
import FilterButtons from './filter-buttons';
import AddTodo from './add-todo';
import VisibleTodoList from './visible-todo-list';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { devToolsEnhancer } from 'redux-devtools-extension';

export default class Todos extends Component {
  
  store = createStore(rootReducer,
                     {todos:[{id:1, text:"Learn Redux",completed:false},
                             {id:2, text:"Walk the dog", completed:false}]},        
                     devToolsEnhancer());

  render = () => (
    <Provider store={this.store}>
      <div >
        <h1>Todos (using Redux)</h1>
        <AddTodo  />
        <FilterButtons   />  
        <VisibleTodoList  />
      </div>
    </Provider>
  );
}



