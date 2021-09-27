import React from 'react';
import { Form } from 'react-bootstrap';

export default function MyTextbox(props) {
  return <Form.Control className='my-3' {...props} />;
}
