import React, { ChangeEvent } from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

interface CounterProps {
  init: number;
}

//simple use of state.  No effects (so no save or restore of the counter value)
export default function Counter({ init }: CounterProps) {
  const [count, setCount] = React.useState<number | null>(+init || 1);

  function increment(incr: number) {
    setCount((count ?? 0) + incr);
  }

  function change(evt: ChangeEvent<HTMLInputElement>) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
    }
    if (['', '-'].includes(evt.target.value)) {
      setCount(null);
    }
  }

  return (
    <>
      <h1>The count is: {count} </h1>
      <MyButton onIncrement={increment} value={1} />
      <MyButton onIncrement={increment} value={-10} />
      <MyButton onIncrement={increment} value={100} />
      <MyTextbox value={count} onChange={change} />
    </>
  );
}
