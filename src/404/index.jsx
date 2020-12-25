import React from 'react';
import { Alert } from 'reactstrap';

const NotFound = (props) => (
  <Alert color='danger'>
    Page <code>{props.location.pathname}</code> not found!!!!
  </Alert>
);

export default NotFound;
