import React from 'react';
import TodoItem from './todo-item';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
  <ListGroup className='my-4'>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onToggleTodo(todo.id)}
        onDelete={(evt) => {
          evt.stopPropagation();
          onDeleteTodo(todo.id);
        }}
      />
    ))}
  </ListGroup>
);

export default TodoList;
