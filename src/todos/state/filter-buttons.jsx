import React from 'react';
import PropTypes from 'prop-types';
import {ButtonGroup} from 'reactstrap';
import FilterLink from './filter-link';
import { VisibilityFilters } from './visibility-filters';


export default function FilterButtons(props) {
  return (
  <div className="my-3">
    <span>Show: </span>
    <ButtonGroup>
      <FilterLink filter={VisibilityFilters.SHOW_ALL} visibilityFilter={props.visibilityFilter} onChangeFilter={props.onChangeFilter} >
        All
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE} visibilityFilter={props.visibilityFilter} onChangeFilter={props.onChangeFilter} >
        Active
      </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED} visibilityFilter={props.visibilityFilter} onChangeFilter={props.onChangeFilter} >
        Completed
      </FilterLink>
    </ButtonGroup>
  </div>
)};

FilterButtons.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};
