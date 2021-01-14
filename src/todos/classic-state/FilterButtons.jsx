import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { StatusFilters } from './StatusFilters';

export default function FilterButtons({ value: status, onChange }) {
  const buttonList = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const selected = value === status;
    return (
      <Button
        key={key}
        onClick={() => onChange(value)}
        color={selected ? 'primary' : 'info'}
      >
        {key}
      </Button>
    );
  });

  return (
    <div className='my-3'>
      <span>Show: </span>
      <ButtonGroup>{buttonList}</ButtonGroup>
    </div>
  );
}
