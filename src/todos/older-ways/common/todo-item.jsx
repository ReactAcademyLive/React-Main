import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons';

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
      <TrashFill />
    </Button>
  </ListGroup.Item>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
