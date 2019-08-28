import React from 'react';
import TodoList from '../common/todo-list';
import { VisibilityFilters } from './action';
import TodoContext from './todo-context';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

function VisibleTodoList() {
  const context = React.useContext(TodoContext);

  return (
  <TodoList  {...context} 
             todos={getVisibleTodos(context.todos, context.visibilityFilter)} 
  />
)}; 


export default VisibleTodoList;