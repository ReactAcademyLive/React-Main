import React from 'react';
import { Form } from 'react-bootstrap';

export default function ModifyData(props) {
  return (
    <>
      <Form.Control
        value={props.firstName}
        name='firstName'
        placeholder='First Name'
        onChange={props.onChange}
        className='mb-4'
      />
      {props.lastName && (
        <Form.Control
          value={props.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={props.onChange}
          className='mb-4'
        />
      )}
      <Form.Control
        value={props.color}
        name='color'
        placeholder='Color'
        onChange={props.onChange}
      />
    </>
  );
}
