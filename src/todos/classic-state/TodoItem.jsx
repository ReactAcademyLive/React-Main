import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

const CustomCheckbox = ({ text, completed }) => (
  <div className='form-check float-start my-3'>
    <input
      type='checkbox'
      className='form-check-input'
      checked={completed}
      onChange={() => null}
    />
    <label
      className={
        'form-check-label' +
        (completed ? ' text-decoration-line-through text-muted' : '')
      }
    >
      {text}
    </label>
  </div>
);

const TodoItem = ({ onToggle, onDelete, completed, text }) => (
  <ListGroup.Item onClick={onToggle} action as='a'>
    <CustomCheckbox text={text} completed={completed} />
    <Button className='float-end mt-2' variant='warning' onClick={onDelete}>
      <TrashFill />
    </Button>
  </ListGroup.Item>
);

export default TodoItem;
