import React from 'react';
import FilterButtons from '../filter-buttons';
import AddTodo from '../add-todo';
import VisibleTodoList from '../visible-todo-list';
//import TodoList from './todo-list';
import { VisibilityFilters } from '../visibility-filters';


export default function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [visibilityFilter, setVisibilityFilter] = React.useState(VisibilityFilters.SHOW_ALL);
  const [currentId, setCurrentId] = React.useState(4);

  function toggleTodo(id) {
    setTodos(todos.map(todo =>
      (todo.id === id)
        ? { ...todo, completed: !todo.completed }
        : todo
    ))
  }

  function addTodo(todoText) {
    setTodos([
      ...todos,
      {
        id: currentId,
        text: todoText,
        completed: false
      }
    ]);
    setCurrentId(currentId + 1);
  }

  function changeFilter(filter) {
    setVisibilityFilter(filter)
  };

  return (
    <div >
      <h1>Todos (using state and hooks)</h1>
      <AddTodo onAddTodo={addTodo} />
      <FilterButtons
        visibilityFilter={visibilityFilter}
        onChangeFilter={changeFilter} />
      <VisibleTodoList
        todos={todos}
        visibilityFilter={visibilityFilter}
        onToggleTodo={toggleTodo}
        onDeleteTodo={null}
      />
    </div>
  );
}



