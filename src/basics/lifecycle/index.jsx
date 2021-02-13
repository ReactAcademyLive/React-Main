import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'reactstrap';

let consoleText = '';

const myLog = (data) => {
  // consoleText += data + '\n';
  console.log(data);
};

export default function Lifecycle() {
  const [state, setState] = useState();

  myLog('--------------------');
  myLog('Start of component render');

  const executionTime = new Date().toTimeString();

  function updateState() {
    myLog('Button is clicked');
    myLog('Before setState');
    setState({});
    myLog('After setState, data is scheduled to be updated.');
  }

  useEffect(() => {
    myLog(`This is executed AFTER the first time we render (only once).`);
    return () => {
      myLog('This is executed when we unmount (when we go to another route).');
    };
  }, []);

  useLayoutEffect(() => {
    myLog(`This layout effect is executed AFTER the render, but before the browser paints
       at present: ${executionTime}
    `);
    return () => {
      myLog(
        `This layout cleanup is executed AFTER the render, before the next Layout Effect and browser paint.
       from the past: ${executionTime}
        `
      );
    };
  });

  useEffect(() => {
    myLog(`This effect is executed AFTER the render.
       at present: ${executionTime}
    `);
    return () => {
      myLog(
        `This cleanup is executed AFTER the render, just before the next effect.
       from the past: ${executionTime}
        `
      );
    };
  });

  myLog('Returning render');
  return (
    <>
      <h1>Lifecycle of a React component using Hooks</h1>
      <p>Look at the console. We are logging all events. </p>
      <p>Here is the empty state: {JSON.stringify(state)}</p>
      <Button onClick={updateState} className='mb-4'>
        Update State
      </Button>
      <textarea
        className='form-control'
        value={consoleText}
        cols='70'
        rows='25'
      />
    </>
  );
}
