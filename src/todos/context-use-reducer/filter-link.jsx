import React from 'react';
import PropTypes from 'prop-types';
import Link from '../common/link';

const FilterLink = (props) => (
  <Link  active={(props.filter === props.visibilityFilter)}
    onClick={() => (props.onChangeFilter(props.filter))}
  >{props.children}</Link>
);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired
};

export default FilterLink;