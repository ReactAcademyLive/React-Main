import React from 'react';
import MyInputs from './MyInputs';
import MyContext from './MyContext';

//Hooks only work with functions
export default function ContextHooks() {
  const ctx = React.useContext(MyContext);
  return <MyInputs {...ctx} />;
}
