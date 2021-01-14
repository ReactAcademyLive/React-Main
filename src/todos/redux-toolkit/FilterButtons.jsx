import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { StatusFilters, setVisibilityFilter } from './slices/visibility-filter';

export default function FilterButtons() {
  const dispatch = useDispatch();
  const visibilityFilter = useSelector((state) => state.visibilityFilter);
  const onChangeFilter = (newFilter) =>
    dispatch(setVisibilityFilter(newFilter));

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
