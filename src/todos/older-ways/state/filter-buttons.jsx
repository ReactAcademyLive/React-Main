import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import FilterLink from './filter-link';
import { VisibilityFilters } from './visibility-filters';

export default function FilterButtons({ visibilityFilter, onChangeFilter }) {
  return (
    <div className='my-3'>
      <span>Show: </span>
      <ButtonGroup>
        <FilterLink
          filter={VisibilityFilters.SHOW_ALL}
          visibilityFilter={visibilityFilter}
          onChangeFilter={onChangeFilter}
        >
          All
        </FilterLink>
        <FilterLink
          filter={VisibilityFilters.SHOW_ACTIVE}
          visibilityFilter={visibilityFilter}
          onChangeFilter={onChangeFilter}
        >
          Active
        </FilterLink>
        <FilterLink
          filter={VisibilityFilters.SHOW_COMPLETED}
          visibilityFilter={visibilityFilter}
          onChangeFilter={onChangeFilter}
        >
          Completed
        </FilterLink>
      </ButtonGroup>
    </div>
  );
}
