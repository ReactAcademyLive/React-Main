import React from 'react';
import { FormGroup, Input, FormFeedback } from 'reactstrap';
import PropTypes from 'prop-types';

const MyTextBox = (props) => {
  return (
    //form-floating or form-label-group
    <FormGroup className='form-floating my-4'>
      <Input
        type='text'
        id={props.name}
        name={props.name}
        placeholder={props.fullName}
        value={props.value}
        onChange={props.onChange}
        invalid={!!props.formErrors[props.name]}
      />
      <label htmlFor={props.name}>{props.fullName}</label>
      <FormFeedback>{props.formErrors[props.name]}</FormFeedback>
    </FormGroup>
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
