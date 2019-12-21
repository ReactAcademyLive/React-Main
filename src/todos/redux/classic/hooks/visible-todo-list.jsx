import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo /*, deleteTodo */ } from '../connect/actions';
import TodoList from '../../../common/todo-list';
import { VisibilityFilters } from '../connect/actions';

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
};

export default function VisibleTodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  return (
    <TodoList
      todos={getVisibleTodos(todos, visibilityFilter)}
      onToggleTodo={id => dispatch(toggleTodo(id))}
      onDeleteTodo={id => null}
    />
  );
}
