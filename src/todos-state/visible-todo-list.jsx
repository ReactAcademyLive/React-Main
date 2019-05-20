import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './todo-list';
import { VisibilityFilters } from './visibility-filters';

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

const VisibleTodoList = (props) => (
  <TodoList  {...props} 
             todos={getVisibleTodos(props.todos,props.visibilityFilter)} 
  />
); 

VisibleTodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
 // onDeleteTodo: PropTypes.func.isRequired
};

export default VisibleTodoList;