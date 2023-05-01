import { ButtonGroup, Button } from 'react-bootstrap';

import { setVisibilityFilter } from './slices/visibility-filter';
import { StatusFilters } from '../common/StatusFilters';
import { useAppDispatch, useAppSelector } from './slices/hooks';

type StatusFiltersStrings = keyof typeof StatusFilters;

export default function FilterButtons() {
  const dispatch = useAppDispatch();
  const visibilityFilter = useAppSelector((state) => state.visibilityFilter);
  const onChangeFilter = (newFilter: StatusFilters) =>
    dispatch(setVisibilityFilter(newFilter));

  const buttonList = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key as StatusFiltersStrings];
    const selected = value === visibilityFilter;
    return (
      <Button
        key={key}
        onClick={() => onChangeFilter(value)}
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
