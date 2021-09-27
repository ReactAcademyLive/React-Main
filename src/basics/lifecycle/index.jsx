/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

let consoleText = '';

// To be able do display the log data on the screen,
// as soon as possible
// we are using DOM updates instead of modifying
// the React state
// This is NOT the proper 'React' way of doing things.
// (To do it the React way, logThis() would need
// to call setState().  This would create an infinite loop
// when using useEffect().)
function logThis(data) {
  consoleText += data + '\n';
  console.log(data);

  // following line updates the DOM.
  // --NOT the React way of doing things.
  document.querySelector('#logConsole') &&
    (document.querySelector('#logConsole').value = consoleText);
}

export default function Lifecycle() {
  const [state, setState] = useState(0);

  logThis('--------------------');
  logThis('Start of component render');

  const executionTime = new Date().toLocaleTimeString();

  function updateState(evt) {
    logThis('^^^^^^^^^^^^^^^');
    logThis(`${evt.currentTarget.id} is clicked`);
    logThis('setState');
    setState(state + 1);
    logThis('After setState, component is scheduled to be updated.');
    logThis('vvvvvvvvvvvvvv');
  }

  // useEffect(() => {
  //   logThis(`This is executed AFTER the first time we render (only once).`);
  //   return () => {
  //     logThis(
  //       'This is executed when we unmount (ex: when we go to another route).'
  //     );
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
  logThis('--------------------');
  return (
    <>
      <h1>Lifecycle of a React component using Hooks</h1>
      <p>Look at the console. We are logging all events. </p>
      <p>Here is the state: {JSON.stringify(state)}</p>
      <div id='div1' onNothing={updateState}>
        <Button onClick={updateState} className='mb-4' id='btn1'>
          Update State
        </Button>
      </div>
      <textarea
        id='logConsole'
        className='form-control'
        cols='70'
        rows='25'
        defaultValue={consoleText}
      />
    </>
  );
}
