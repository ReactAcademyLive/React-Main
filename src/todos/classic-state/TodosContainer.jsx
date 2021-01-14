import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import initialTodos from '../older-ways/common/initial-todos';
import { StatusFilters } from './StatusFilters';

let currentId = 4;

export default function Todos() {
  const [todos, setTodos] = useState(initialTodos);
  const [visibilityFilter, setVisibilityFilter] = useState(StatusFilters.All); //"SHOW_COMPLETED", "SHOW_ACTIVE"

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function addTodo(todoText) {
    setTodos([
      ...todos,
      {
        id: currentId++,
        text: todoText,
        completed: false,
      },
    ]);
  }

  function changeFilter(filter) {
    setVisibilityFilter(filter);
  }

  function filterTodos(todos, filter) {
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

  const filteredTodos = filterTodos(todos, visibilityFilter);

  return (
    <div>
      <h1>Todos (using state)</h1>
      <AddTodo onAddTodo={addTodo} />
      <FilterButtons value={visibilityFilter} onChange={changeFilter} />
      <TodoList
        todos={filteredTodos}
        visibilityFilter={visibilityFilter}
        onToggleTodo={toggleTodo}
        onDeleteTodo={() => {
          alert('To be programmed');
        }}
      />
    </div>
  );
}
