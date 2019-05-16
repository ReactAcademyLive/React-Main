import React from 'react';
import {ButtonGroup} from 'reactstrap';
import FilterLink from './filter-link';
import { VisibilityFilters } from './actions';


export default function FilterButtons() {
  return (
  <div className="my-3">
    <span>Show: </span>
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL} >
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} >
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} >
        Completed
      </FilterLink>
    </ButtonGroup>
  </div>
)};


