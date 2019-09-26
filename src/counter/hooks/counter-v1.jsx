import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

//simple use of hooks.  No effects (so no save or restore of the counter value)
export default function Counter(props) {
  const [count, setCount] = React.useState(props.init || 1);

  function click(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
  }

  return (
    <>
      <h1>the count is: {count} </h1>
      <MyButton onClick={click} incr='1' />
      <MyButton onClick={click} incr='-10' />
      <MyButton onClick={click} incr='100' />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}
