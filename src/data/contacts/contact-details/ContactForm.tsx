import { Form, Button } from 'react-bootstrap'; //Alert
import MyTextBox from './MyTextbox';
import { ChangeEvent, FormEvent } from 'react';
import Contact from '../contact-api/ContactType';

interface ContactFormProps extends Contact {
  formErrors: FormErrors;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
}

type FormErrors = {
  [Property in keyof Contact]?: string;
};

export default function ContactForm({
  id,
  firstName,
  lastName,
  email,
  formErrors,
  onChange,
  onSubmit,
}: ContactFormProps) {
  return (
    <Form
      onSubmit={(evt) => {
        evt.preventDefault();
        onSubmit(evt);
      }}
    >
      <Form.Control type='hidden' name='id' value={id} />

      <MyTextBox
        name='firstName'
        fullName='First Name'
        value={firstName}
        onChange={onChange}
        formErrors={formErrors}
      />

      <MyTextBox
        name='lastName'
        fullName='Last Name'
        value={lastName}
        onChange={onChange}
        formErrors={formErrors}
      />

      <MyTextBox
        name='email'
        fullName='Email'
        value={email}
        onChange={onChange}
        formErrors={formErrors}
      />

      <Form.Group>
        {/* {formErrors.global ? (
          <Alert variant='danger'>{formErrors.global}</Alert>
        ) : (
          ''
        )} */}
        <Button variant='primary' type='submit'>
          Submit Contact
        </Button>

        {/* <Button className="ms-3" variant="danger"
                       onClick={null}>
                  🗑️
          </Button> */}
      </Form.Group>
    </Form>
  );
}
