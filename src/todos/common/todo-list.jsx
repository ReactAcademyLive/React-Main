import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todo-item';
import { ListGroup } from 'reactstrap';

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => (
  <ListGroup className='my-4'>
    {todos.map(todo => (
      <TodoItem
        key={todo.id}
        {...todo}
        onClick={() => onToggleTodo(todo.id)}
        onDelete={evt => {
          evt.stopPropagation();
          onDeleteTodo(todo.id);
        }}
      />
    ))}
  </ListGroup>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
