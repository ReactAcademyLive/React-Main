import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MyTextBox = (props) => {
  return (
    //form-floating or form-label-group
    <Form.Group className='form-floating my-4'>
      <Form.Control
        type='text'
        id={props.name}
        name={props.name}
        placeholder={props.fullName}
        value={props.value}
        onChange={props.onChange}
        isInvalid={!!props.formErrors[props.name]}
      />
      <Form.Label>{props.fullName}</Form.Label>
      <Form.Control.Feedback>
        {props.formErrors[props.name]}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default MyTextBox;

MyTextBox.propTypes = {
  fullName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  formErrors: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
