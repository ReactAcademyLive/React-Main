import React from 'react';
import { Input } from 'reactstrap';
import MyContext from './MyContext';

//standard way to consume context, available to both functions and classes
export default function ModifyDataConsumer() {
  return (
    <MyContext.Consumer>
      {(ctx) => (
        <>
          <Input
            value={ctx.firstName}
            name='firstName'
            placeholder='First Name'
            onChange={ctx.onChange}
            className='mb-4'
          />
          <Input
            value={ctx.color}
            name='color'
            placeholder='Color'
            onChange={ctx.onChange}
          />
        </>
      )}
    </MyContext.Consumer>
  );
}
