import React from 'react';
import { Button } from 'react-bootstrap';

export default function MyButton({ onIncrement, value }) {
  return (
    <Button
      variant={value >= 0 ? 'primary' : 'danger'}
      className='me-3'
      onClick={(evt) => onIncrement(value)}
    >
      {value >= 0 ? 'increment' : 'decrement'} {Math.abs(value)}
    </Button>
  );
}
