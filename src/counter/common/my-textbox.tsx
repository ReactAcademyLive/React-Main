import { ChangeEventHandler } from 'react';
import { Form } from 'react-bootstrap';

interface MyTextboxProps {
  value: number | null;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export default function MyTextbox({ value, onChange }: MyTextboxProps) {
  return (
    <Form.Control className='my-3' value={value ?? ''} onChange={onChange} />
  );
}
