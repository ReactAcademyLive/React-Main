import React from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, editTodo /*, deleteTodo */ } from './slices/todos';
import { StatusFilters } from './slices/visibility-filter';
import { createSelector } from '@reduxjs/toolkit';

const getTodos = (state) => state.todos;
const getVisibilityFilter = (state) => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [getTodos, getVisibilityFilter],
  (todos, filter) => {
    switch (filter) {
      case StatusFilters.All:
        return todos;
      case StatusFilters.Completed:
        return todos.filter((t) => t.completed);
      case StatusFilters.Active:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  }
);

const TodoList = () => {
  const dispatch = useDispatch();
  const filteredTodos = useSelector(selectVisibleTodos);

  const onToggleTodo = (id) => dispatch(toggleTodo(id));
  const onDeleteTodo = (id) => alert('To be implemented');
  const onEditTodo = (id, newText) => dispatch(editTodo(id, newText));

  return (
    <ListGroup tag='div' className='my-4'>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={() => onToggleTodo(todo.id)}
          onDelete={(evt) => {
            evt.stopPropagation();
            onDeleteTodo(todo.id);
          }}
          onEdit={(newText) => onEditTodo(todo.id, newText)}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
