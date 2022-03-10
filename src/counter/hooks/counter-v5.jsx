import React from 'react';
import MyButton from '../common/my-button';
import MyTextbox from '../common/my-textbox';

//This version stores the counter in local storage
//when we navigate away from the component
function useLocalStorage(initial, name) {
  const [state, setState] = React.useState(initial);
  const latestState = React.useRef();
  latestState.current = state;

  React.useEffect(() => {
    let storedState = window.localStorage.getItem(name);
    setState(storedState || latestState.current);

    return function cleanup() {
      window.localStorage.setItem(name, latestState.current);
    };
  }, [name]);

  return [state, setState];
}

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
