import { ChangeEvent } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

type FormErrors = {
  [k: string]: string;
};

interface MyTextboxProps {
  fullName: string;
  name: string;
  value: string;
  formErrors: FormErrors;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function MyTextbox({
  fullName,
  name,
  value,
  formErrors,
  onChange,
}: MyTextboxProps) {
  return (
    //form-floating or form-label-group
    <FloatingLabel label={fullName} className=' my-4'>
      <Form.Control
        type='text'
        id={name}
        name={name}
        placeholder={fullName}
        defaultValue={value}
        onChange={onChange}
        isInvalid={!!formErrors[name]}
      />
      <Form.Control.Feedback>{formErrors[name]}</Form.Control.Feedback>
    </FloatingLabel>
  );
}

export default MyTextbox;
