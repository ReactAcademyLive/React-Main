import React from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const NotFound = (props) => {
  console.log(props);
  return (
    <Alert variant='danger'>
      Page <code>{useLocation().pathname}</code> not found!!!!
    </Alert>
  );
};

export default NotFound;
