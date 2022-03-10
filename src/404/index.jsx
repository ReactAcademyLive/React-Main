import React from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Alert variant='danger'>
      Page <code>{useLocation().pathname}</code> not found!!!!
    </Alert>
  );
}
