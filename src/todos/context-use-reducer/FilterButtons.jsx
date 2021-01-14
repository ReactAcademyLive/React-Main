import React, { useContext } from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import todoContext from './StateManager/todo-context';
import { StatusFilters } from './StateManager/actions';

export default function FilterButtons() {
  const ctx = useContext(todoContext);
  const { visibilityFilter, onChangeFilter } = ctx;
  const buttonList = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const selected = value === visibilityFilter;
    return (
      <Button
        key={key}
        onClick={() => onChangeFilter(value)}
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
