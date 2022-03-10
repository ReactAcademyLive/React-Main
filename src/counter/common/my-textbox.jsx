import React from 'react';
import { Form } from 'react-bootstrap';

export default function MyTextbox({ value, onChange }) {
  return <Form.Control className='my-3' value={value} onChange={onChange} />;
}
