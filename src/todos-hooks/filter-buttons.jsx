import React from 'react';
import {ButtonGroup} from 'reactstrap';
import FilterLink from './filter-link';
import { VisibilityFilters } from './action';
import TodoContext from './todo-context';


export default function FilterButtons(props) {
  const context = React.useContext(TodoContext);
  const {visibilityFilter, onChangeFilter}= context;

  return (
  <div className="my-3">
    <span>Show: </span>
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL} visibilityFilter={visibilityFilter} onChangeFilter={onChangeFilter} >
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} visibilityFilter={visibilityFilter} onChangeFilter={onChangeFilter} >
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} visibilityFilter={visibilityFilter} onChangeFilter={onChangeFilter} >
        Completed
      </FilterLink>
    </ButtonGroup>
  </div>
)};

