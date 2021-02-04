import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'reactstrap';

export default function Lifecycle() {
  console.log('--------------------');
  console.log('Start of component render');

  const [state, setState] = useState();
  const executionTime = new Date().toTimeString();

  function updateState() {
    console.log('Before setState');
    setState({});
    console.log('After setState, data is scheduled to be updated.');
  }

  useEffect(() => {
    console.log(`This is executed AFTER the first time we render (only once).`);
    return () => {
      console.log(
        'This is executed when we unmount (when we go to another route).'
      );
    };
  }, []);

  useLayoutEffect(() => {
    console.log(`This layout effect is executed AFTER the render, but before the browser paints
       at present: ${executionTime}
    `);
    return () => {
      console.log(
        `This layout cleanup is executed AFTER the render, before the next Layout Effect and browser paint.
       from the past: ${executionTime}
        `
      );
    };
  });

  useEffect(() => {
    console.log(`This effect is executed AFTER the render.
       at present: ${executionTime}
    `);
    return () => {
      console.log(
        `This cleanup is executed AFTER the render, just before the next effect.
       from the past: ${executionTime}
        `
      );
    };
  });

  console.log('Returning render');
  return (
    <>
      <h1>Lifecycle of a React component using Hooks</h1>
      <p>Look at the console. We are logging all events. </p>
      <p>Here is the empty state: {state?.toString()}</p>
      <Button onClick={updateState}>Update State</Button>
    </>
  );
}
