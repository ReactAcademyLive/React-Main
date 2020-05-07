import React from 'react';
import { DropdownToggle } from 'reactstrap';
import { useLocation } from 'react-router-dom';

export default function ToggleMenu({ name, link }) {
  const location = useLocation();
  return (
    <DropdownToggle
      nav
      tag='a'
      className={location.pathname.startsWith('/' + link) ? 'active' : ''}
      caret
    >
      {name}
    </DropdownToggle>
  );
}
