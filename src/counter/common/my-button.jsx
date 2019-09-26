import React from 'react';
import { Button } from 'reactstrap';

export default function MyButton(props) {
  return (
    <Button
      color='primary'
      className='mr-3'
      onClick={evt => props.onIncrement(+props.incr)}
    >
      {props.incr >= 0 ? 'increment' : 'decrement'} {Math.abs(+props.incr)}
    </Button>
  );
}
