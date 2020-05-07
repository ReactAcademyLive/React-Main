import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo /*, deleteTodo */ } from '../connect/slices/todos';
import TodoList from '../../../common/todo-list';
import { VisibilityFilters } from '../connect/slices/visibility-filter';
import { createSelector } from '@reduxjs/toolkit';

const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }
);

export default function VisibleTodoList() {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectVisibleTodos);
  return (
    <TodoList
      todos={filteredTodos}
      onToggleTodo={(id) => dispatch(toggleTodo(id))}
      onDeleteTodo={(id) => null}
    />
  );
}
