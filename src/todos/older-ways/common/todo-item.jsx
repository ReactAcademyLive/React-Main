import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ onClick, onDelete, completed, text }) => (
  <ListGroup.Item onClick={onClick} action>
    <div
      className={'float-start my-3' + (completed ? ' text-muted' : '')}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
    <Button className='float-end  mt-2' variant='info' onClick={onDelete}>
      🗑️
    </Button>
  </ListGroup.Item>
);

export default TodoItem;
