import { Form } from 'react-bootstrap';
import { Person } from './PersonContext';

export default function MyInputs(person: Person) {
  return (
    <>
      <Form.Control
        value={person.firstName}
        name='firstName'
        placeholder='First Name'
        onChange={person.onChange}
        className='mb-4'
      />
      {person.lastName !== undefined && (
        <Form.Control
          value={person.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={person.onChange}
          className='mb-4'
        />
      )}
      <Form.Control
        value={person.color}
        name='color'
        placeholder='Color'
        onChange={person.onChange}
      />
    </>
  );
}
