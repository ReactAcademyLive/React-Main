import React from 'react';
import MyInputs from './MyInputs';
import MyContext from './MyContext';

//standard way to consume context, available to both functions and classes
export default function ContextConsumer() {
  return (
    <MyContext.Consumer>
      {
        (ctx) => <MyInputs {...ctx} /> //
      }
    </MyContext.Consumer>
  );
}
