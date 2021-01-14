import React from 'react';
import { ListGroupItem, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CustomCheckbox = ({ text, completed }) => (
  <div className='custom-checkbox custom-control float-left my-3'>
    <input
      type='checkbox'
      className='custom-control-input'
      checked={completed}
      onChange={() => null}
    />
    <label
      className={
        'custom-control-label' +
        (completed ? ' text-decoration-line-through text-muted' : '')
      }
    >
      {text}
    </label>
  </div>
);

const TodoItem = ({ onToggle, onDelete, completed, text }) => (
  <ListGroupItem onClick={onToggle} action tag='a'>
    <CustomCheckbox text={text} completed={completed} />
    <Button className='float-right mt-2' color='info' onClick={onDelete}>
      <FontAwesomeIcon icon={faTrashAlt} />
    </Button>
  </ListGroupItem>
);

export default TodoItem;
