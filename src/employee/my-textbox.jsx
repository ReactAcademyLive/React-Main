import React from 'react'
import { FormGroup, Input, FormFeedback } from 'reactstrap'
import PropTypes from 'prop-types'
const MyTextBox = (props) => {
    return (
        <FormGroup>
            <Input type="text"
                name={props.name}
                placeholder={props.fullName}
                value={props.value}
                onChange={props.onChange}
                invalid={!!props.formErrors[props.name]}
            />
            <FormFeedback >{props.formErrors[props.name]}</FormFeedback>
        </FormGroup>
    )
}  

export default MyTextBox

MyTextBox.propTypes = {
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    formErrors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  };