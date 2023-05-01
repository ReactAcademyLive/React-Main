import { createContext } from 'react';
import Todo from '../../common/Todo';
import { StatusFilters } from '../../common/StatusFilters';

interface TodoContext {
  todos: Todo[];
  visibilityFilter: StatusFilters;
  onAddTodo?: (text: string) => void;
  onToggleTodo?: (id: number) => void;
  onDeleteTodo?: (id: number) => void;
  onEditTodo?: (id: number, text: string) => void;
  onChangeFilter?: (filter: StatusFilters) => void;
}

export default createContext<TodoContext>({
  todos: [],
  visibilityFilter: StatusFilters.All,
});

export type ActionTodos =
  | { type: 'todos/addTodo'; payload: string }
  | { type: 'todos/toggleTodo'; payload: number }
  | { type: 'todos/editTodo'; payload: { id: number; text: string } };

export type ActionFilters = {
  type: 'visibilityFilter/setStatus';
  payload: StatusFilters;
};
