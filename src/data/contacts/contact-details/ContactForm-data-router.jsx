import React from 'react';
import { Form, Button } from 'react-bootstrap'; //Alert
import { Form as FormRoute } from 'react-router-dom';
import MyTextBox from './MyTextbox';

export default function ContactForm({
  id,
  firstName,
  lastName,
  email,
  formErrors,
  onChange,
}) {
  return (
    <Form method='post' as={FormRoute}>
      <Form.Control type='hidden' name='id' value={id} />
      <MyTextBox
        name='firstName'
        fullName='First Name'
        value={firstName}
        onChange={onChange}
        formErrors={formErrors}
      />

      <MyTextBox
        name='lastName'
        fullName='Last Name'
        value={lastName}
        onChange={onChange}
        formErrors={formErrors}
      />

      <MyTextBox
        name='email'
        fullName='Email'
        value={email}
        onChange={onChange}
        formErrors={formErrors}
      />

      <Form.Group>
        {/* {formErrors.global ? (
          <Alert variant='danger'>{formErrors.global}</Alert>
        ) : (
          ''
        )} */}
        <Button variant='primary' type='submit'>
          Submit Contact
        </Button>

        {/* <Button className="ms-3" variant="danger"
                       onClick={null}>
                🗑️
          </Button> */}
      </Form.Group>
    </Form>
  );
}
