import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';
import {FaBackspace}  from 'react-icons/fa';

const TodoItem = ({ onClick,  completed, text, onDelete }) => (
  <ListGroupItem
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      cursor: 'pointer'
    }}
  >
    {text}
    <button onClick={onDelete} className="float-right text-button" >
      <FaBackspace size="1.5em" /> 
    </button>
     
  </ListGroupItem>
);

TodoItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default TodoItem;