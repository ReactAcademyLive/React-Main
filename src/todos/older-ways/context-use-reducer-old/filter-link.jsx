import React from 'react';
import PropTypes from 'prop-types';
import Link from '../common/link';

const FilterLink = ({ filter, visibilityFilter, onChangeFilter, children }) => (
  <Link
    active={filter === visibilityFilter}
    onClick={() => onChangeFilter(filter)}
  >
    {children}
  </Link>
);

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  visibilityFilter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default FilterLink;
