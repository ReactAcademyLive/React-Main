/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'reactstrap';

let consoleText = '';

function logThis(data) {
  consoleText += data + '\n';
  console.log(data);
  document.querySelector('#logConsole') &&
    (document.querySelector('#logConsole').value = consoleText);
}

export default function Lifecycle() {
  const [state, setState] = useState();

  logThis('--------------------');
  logThis('Start of component render');

  const executionTime = new Date().toTimeString();

  function updateState() {
    logThis('Button is clicked');
    logThis('Before setState');
    setState({});
    logThis('After setState, data is scheduled to be updated.');
  }

  // useEffect(() => {
  //   logThis(`This is executed AFTER the first time we render (only once).`);
  //   return () => {
  //     logThis('This is executed when we unmount (ex: when we go to another route).');
  //   };
  // }, []);

  // useLayoutEffect(() => {
  //   logThis(`This layout effect is executed AFTER the render, but before the browser paints
  //      at present: ${executionTime}
  //   `);
  //   return () => {
  //     logThis(
  //       `This layout cleanup is executed AFTER the render, before the next Layout Effect and browser paint.
  //      from the past: ${executionTime}
  //       `
  //     );
  //   };
  // });

  // useEffect(() => {
  //   logThis(`This effect is executed AFTER the render.
  //      at present: ${executionTime}
  //   `);
  //   return () => {
  //     logThis(
  //       `This cleanup is executed AFTER the render, just before the next effect.
  //      from the past: ${executionTime}
  //       `
  //     );
  //   };
  // });

  logThis('Returning render');
  return (
    <>
      <h1>Lifecycle of a React component using Hooks</h1>
      <p>Look at the console. We are logging all events. </p>
      <p>Here is the empty state: {JSON.stringify(state)}</p>
      <Button onClick={updateState} className='mb-4'>
        Update State
      </Button>
      <textarea id='logConsole' className='form-control' cols='70' rows='25' />
    </>
  );
}
