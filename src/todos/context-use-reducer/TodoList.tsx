import { MouseEvent, useContext } from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';
import TodoContext from './StateManager/todo-context';

export default function TodoList() {
  const ctx = useContext(TodoContext);
  const { todos, onToggleTodo, onDeleteTodo, onEditTodo } = ctx;
  return (
    <ListGroup className='my-4'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={() => {
            if (onToggleTodo) onToggleTodo(todo.id);
          }}
          onDelete={(evt: MouseEvent) => {
            evt.stopPropagation();
            if (onDeleteTodo) onDeleteTodo(todo.id);
          }}
          onEdit={(newText: string) => {
            if (onEditTodo) onEditTodo(todo.id, newText);
          }}
        />
      ))}
    </ListGroup>
  );
}
