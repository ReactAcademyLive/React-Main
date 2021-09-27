import React from 'react';
import { Alert } from 'react-bootstrap';

const NotFound = (props) => (
  <Alert variant='danger'>
    Page <code>{props.location.pathname}</code> not found!!!!
  </Alert>
);

export default NotFound;
