import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, FormGroup } from 'reactstrap'; //Alert
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
      <Input type='hidden' name='id' value={props.id} />
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

      <FormGroup>
        {/* {
            props.formErrors.global ? 
            <Alert color="danger">
              {props.formErrors.global}
            </Alert> 
            : ""}  */}
        <Button color='primary'>Submit Contact</Button>

        {/* <Button className="ml-3" color="danger"
                       onClick={null}>
                  <FontAwesomeIcon icon={faTrashAlt} />
          </Button> */}
      </FormGroup>
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
