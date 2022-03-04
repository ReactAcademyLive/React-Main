import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

export default function Picker({ value, onChange, options }) {
  return (
    <span>
      <h1>{value}</h1>
      <Form.Select
        className='mb-1'
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
      >
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </span>
  );
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
