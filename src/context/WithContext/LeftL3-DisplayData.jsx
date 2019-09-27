import React from 'react';
import MyContext from './MyContext';

export default function DisplayData() {
  const ctx = React.useContext(MyContext);
  return <h1 style={{ color: ctx.color }}>The name is {ctx.firstName}</h1>;
}
