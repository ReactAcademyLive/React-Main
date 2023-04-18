import { Form } from 'react-bootstrap';
import { MyContext } from './MyContext';

export default function MyInputs(ctx: MyContext) {
  return (
    <>
      <Form.Control
        value={ctx.firstName}
        name='firstName'
        placeholder='First Name'
        onChange={ctx.onChange}
        className='mb-4'
      />
      {ctx.lastName !== undefined && (
        <Form.Control
          value={ctx.lastName}
          name='lastName'
          placeholder='Last Name'
          onChange={ctx.onChange}
          className='mb-4'
        />
      )}
      <Form.Control
        value={ctx.color}
        name='color'
        placeholder='Color'
        onChange={ctx.onChange}
      />
    </>
  );
}
