import { useContext } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import todoContext from './StateManager/todo-context';
import { StatusFilters } from '../common/StatusFilters';

type StatusFiltersStrings = keyof typeof StatusFilters;

export default function FilterButtons() {
  const ctx = useContext(todoContext);
  const { visibilityFilter, onChangeFilter } = ctx;
  const buttonList = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key as StatusFiltersStrings];
    const selected = value === visibilityFilter;
    return (
      <Button
        key={key}
        onClick={() => {
          if (onChangeFilter) onChangeFilter(value);
        }}
        variant={selected ? 'primary' : 'info'}
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
