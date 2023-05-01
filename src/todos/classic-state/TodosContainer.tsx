import { useState } from 'react';
import FilterButtons from './FilterButtons';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import initialTodos from '../common/initial-todos';
import { StatusFilters } from '../common/StatusFilters';
import Todo from '../common/Todo';

let currentId: number = 4;

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [visibilityFilter, setVisibilityFilter] = useState<StatusFilters>(
    StatusFilters.All
  );

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function addTodo(todoText: string) {
    setTodos([
      ...todos,
      {
        id: currentId++,
        text: todoText,
        completed: false,
      },
    ]);
  }

  function changeFilter(filter: StatusFilters) {
    setVisibilityFilter(filter);
  }

  function filterTodos(todos: Todo[], filter: StatusFilters) {
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
        onToggleTodo={toggleTodo}
        onDeleteTodo={() => {
          alert('To be programmed');
        }}
      />
    </div>
  );
}
