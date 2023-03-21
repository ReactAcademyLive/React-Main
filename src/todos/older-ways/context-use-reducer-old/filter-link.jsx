import React from 'react';

import Link from '../common/link';

const FilterLink = ({ filter, visibilityFilter, onChangeFilter, children }) => (
  <Link
    active={filter === visibilityFilter}
    onClick={() => onChangeFilter(filter)}
  >
    {children}
  </Link>
);

export default FilterLink;
