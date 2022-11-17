import { useEffect, useRef, useState } from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

//
//
//
//
export default function Counter({ init }) {
  let [count, setCount] = useLocalStorage(+init || 1, 'count');
  count = +count;

  function increment(incr) {
    setCount(count + incr);
  }

  function change(evt) {
    if (Number.isInteger(+evt.target.value)) {
      setCount(+evt.target.value);
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

function useLocalStorage(initial, name) {
  const [state, setState] = useState(initial);
  const isFirstRender = useIsFirstRender();

  useEffect(() => {
    let storedState = window.localStorage.getItem(name);
    if (storedState) {
      setState(storedState);
    }
  }, [name]);

  useEffect(() => {
    if (!isFirstRender) window.localStorage.setItem(name, state);
  });

  return [state, setState];
}

function useIsFirstRender() {
  const render = useRef(0);
  if (render.current === 0) {
    render.current = 1;
    return true;
  } else {
    render.current++;
    return false;
  }
}
