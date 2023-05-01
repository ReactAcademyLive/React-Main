import { StatusFilters } from '../../common/StatusFilters';
import { ActionFilters, ActionTodos } from './todo-context';

//action creators
export function addTodo(text: string): ActionTodos {
  return { type: 'todos/addTodo', payload: text };
}

export function toggleTodo(id: number): ActionTodos {
  return { type: 'todos/toggleTodo', payload: id };
}

export function editTodo(id: number, newText: string): ActionTodos {
  return { type: 'todos/editTodo', payload: { id: id, text: newText } };
}

//add deleteTodo here

export function setFilter(text: StatusFilters): ActionFilters {
  return { type: 'visibilityFilter/setStatus', payload: text };
}
