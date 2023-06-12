import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const TodoItem = ({ onClick, completed, text }) => (
  <ListGroup.Item onClick={onClick} action>
    <div
      className={'float-start my-3' + (completed ? ' text-body-secondary' : '')}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </div>
    <Button className='float-end mt-2' variant='info' onClick={null}>
      🗑️
    </Button>
  </ListGroup.Item>
);

export default TodoItem;
