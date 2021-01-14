import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { ListGroup } from 'reactstrap';
import TodoContext from './StateManager/todo-context';

const TodoList = () => {
  const ctx = useContext(TodoContext);
  const { todos, onToggleTodo, onDeleteTodo, onEditTodo } = ctx;
  return (
    <ListGroup className='my-4'>
      {todos.map((todo) => (
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
