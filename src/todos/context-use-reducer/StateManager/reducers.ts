import { StatusFilters } from '../../common/StatusFilters';
import Todo from '../../common/Todo';
import { ActionFilters, ActionTodos } from './todo-context';

let currentId = 4;

export function todoReducer(todos: Todo[], action: ActionTodos): Todo[] {
  switch (action.type) {
    case 'todos/addTodo':
      return [
        ...todos,
        {
          id: currentId++,
          text: action.payload,
          completed: false,
        },
      ];
    case 'todos/toggleTodo':
      return todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case 'todos/editTodo':
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo,
      );
    default:
      return todos;
  }
}

export function filterReducer(
  currentFilter: StatusFilters,
  action: ActionFilters,
) {
  switch (action.type) {
    case 'visibilityFilter/setStatus':
      return action.payload;
    default:
      return currentFilter;
  }
}
