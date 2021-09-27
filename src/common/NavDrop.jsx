import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function NavDrop({ title, link, children }) {
  const location = useLocation();
  return (
    <NavDropdown
      title={title}
      active={location.pathname.startsWith('/' + link)}
    >
      {children}
    </NavDropdown>
  );
}
