import React from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button,FormGroup, Alert} from 'reactstrap'
import { FaRegTrashAlt } from 'react-icons/fa';
import MyTextBox from './my-textbox';



export default function EmployeeForm (props) {
    return (
    <Form onSubmit={(e) => { e.preventDefault();
                             props.onSubmit(); }
                    } >
        <Input type="hidden"
               id="empId"
               value={props.id} />
        <MyTextBox
            name="firstName"
            fullName="First Name"
            value={props.firstName}
            onChange={props.onChange}
            formErrors={props.formErrors} />
        
        <MyTextBox
            name="lastName"
            fullName="Last Name"
            value={props.lastName}
            onChange={props.onChange}
            formErrors={props.formErrors} />
            
        <FormGroup>
           {
            props.formErrors.global ? 
            <Alert color="danger">
              {props.formErrors.global}
            </Alert> 
            : ""} 
          <Button color="primary">Submit Employee</Button>
          {
           props.id !== 0 && 
          <Button color="danger"
                       onClick={props.onDelete}>
                 <FaRegTrashAlt />
          </Button>
          
          }
        </FormGroup>  
    </Form >
    );

}  

EmployeeForm.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    formErrors: PropTypes.object.isRequired,
    onSubmit : PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };