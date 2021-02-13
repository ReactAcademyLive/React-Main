import React from 'react';
import MyContext from './MyContext';
import MyInputs from './MyInputs';

//contextTypes only works with classes
export default class ContextTypes extends React.Component {
  static contextType = MyContext;

  render() {
    const ctx = this.context;
    return <MyInputs {...ctx} />;
  }
}
