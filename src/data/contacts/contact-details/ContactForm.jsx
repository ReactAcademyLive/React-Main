import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap'; //Alert
import MyTextBox from './MyTextbox';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt  } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm(props) {
  return (
    <Form
      onSubmit={(evt) => {
        evt.preventDefault();
        props.onSubmit();
      }}
    >
      <Form.Control type='hidden' name='id' value={props.id} />
      <MyTextBox
        name='firstName'
        fullName='First Name'
        value={props.firstName}
        onChange={props.onChange}
        formErrors={props.formErrors}
      />

      <MyTextBox
        name='lastName'
        fullName='Last Name'
        value={props.lastName}
        onChange={props.onChange}
        formErrors={props.formErrors}
      />

      <MyTextBox
        name='email'
        fullName='Email'
        value={props.email}
        onChange={props.onChange}
        formErrors={props.formErrors}
      />

      <Form.Group>
        {/* {props.formErrors.global ? (
          <Alert variant='danger'>{props.formErrors.global}</Alert>
        ) : (
          ''
        )} */}
        <Button variant='primary' type='submit'>
          Submit Contact
        </Button>

        {/* <Button className="ms-3" variant="danger"
                       onClick={null}>
                  <FontAwesomeIcon icon={faTrashAlt} />
          </Button> */}
      </Form.Group>
    </Form>
  );
}

ContactForm.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  formErrors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
