import React from 'react';
import MyInputs from './MyInputs';
import MyContext from './MyContext';

//Hooks only work with functions
export default function ContextHooks() {
  const ctx = React.useContext(MyContext);
  return <MyInputs {...ctx} />;
}

//
//
//
//
//
//
//
//
//
//
//
//
//

//
//Other (older) altenatives of consuming hooks:

//1. using the context consumer
//standard way to consume context, available to both functions and classes

export function ContextConsumer() {
  return (
    <MyContext.Consumer>
      {
        (ctx) => <MyInputs {...ctx} /> //
      }
    </MyContext.Consumer>
  );
}

//2. using ContextTypes
//This way only works with classes.

export class ContextTypes extends React.Component {
  static contextType = MyContext;

  render() {
    const ctx = this.context;
    return <MyInputs {...ctx} />;
  }
}
