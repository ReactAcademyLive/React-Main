import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Link = ({ active, children, onClick }) => (
  <Button variant='primary' onClick={onClick} disabled={active}>
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
