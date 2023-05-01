import { ListGroup } from 'react-bootstrap';
import { toggleTodo, editTodo /*, deleteTodo */ } from './slices/todos';
import { RootState } from './slices/store';
import { StatusFilters } from '../common/StatusFilters';
import { createSelector } from '@reduxjs/toolkit';
import TodoItem from './TodoItem';
import { useAppDispatch } from './slices/hooks';
import { useAppSelector } from './slices/hooks';

const selectVisibleTodos = createSelector(
  [
    (state: RootState) => state.todos,
    (state: RootState) => state.visibilityFilter,
  ],
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
  const dispatch = useAppDispatch();
  const filteredTodos = useAppSelector(selectVisibleTodos);

  const onToggleTodo = (id: number) => dispatch(toggleTodo(id));
  const onDeleteTodo = (id: number) => alert('To be implemented');
  const onEditTodo = (id: number, newText: string) =>
    dispatch(editTodo({ id, newText }));

  return (
    <ListGroup as='div' className='my-4'>
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
