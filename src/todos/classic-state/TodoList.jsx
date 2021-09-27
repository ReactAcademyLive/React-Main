import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import { ListGroup } from 'react-bootstrap';

const TodoList = ({ todos, onToggleTodo, onDeleteTodo, onEditTodo }) => (
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

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  //onDeleteTodo: PropTypes.func.isRequired,
};

export default TodoList;
