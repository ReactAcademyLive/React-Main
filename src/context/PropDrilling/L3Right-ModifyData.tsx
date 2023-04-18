import { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';

interface ModifyDataProps {
  firstName: string;
  lastName?: string;
  color: string;
  onChange?: ChangeEventHandler;
}

export default function ModifyData({
  firstName,
  lastName,
  color,
  onChange,
}: ModifyDataProps) {
  return (
    <>
      <Form.Control
        value={firstName}
        name='firstName'
        placeholder='First Name'
        onChange={onChange}
        className='mb-4'
      />
      {lastName && (
        <Form.Control
          value={lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={onChange}
          className='mb-4'
        />
      )}
      <Form.Control
        value={color}
        name='color'
        placeholder='Color'
        onChange={onChange}
      />
    </>
  );
}
