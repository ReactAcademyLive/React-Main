/* eslint-disable no-unused-vars */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

let consoleText = ''; //module variable with the logged text.

// https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/
// A normal react render goes through the following steps:
// 1. Browser event is *triggered* (click, scroll, input change, fetch result, run effect, etc)
// 2. React Event handler runs and calls setState() (really schedules the change for later)
// 3. React runs all events... it batches all the setStates to run soon,
//    all together, after all events have run.
// 4. Once all events have run, the scheduled setStates can finally run. React updates all states.
//    If no state changes, skip to step 12.
// 5. React re-renders the top-most component of the changed state
// 6  This calls the component (and sub-components), which returns a tree of objects
//       (This was previously called "virtual dom")
// 7. React compares the components from the previous tree and the current tree
//       (This was previously called "reconciliation")
// 8. React determines the diff and updates the DOM.
//       (This is called "commit")
// 9. If there is a useEffectLayout, execute it now by going back to step 2.
//    (ignore this step if not needed)
// 10. Paints the DOM on the screen
// 11. If there is a useEffect, execute it by going back to step 2.
// 12. We are done. Wait for the next event by going to back to step 1

// logThis() uses DOM updates instead of modifying
// the React state
// This is NOT the proper 'React' way of doing things.
// (To do it the React way, logThis() would need
// to call setState(). But then, when trying to logThis()
// from useEffect(), this would create an infinite loop.
// The workaround here is to use DOM Updates.
// In real life, you would not need to do this. )
function logThis(data) {
  consoleText += data + '\n';
  console.log(data);

  // the following line updates the DOM.
  // --IMPORTANT: NOT the React way of doing things.
  // Do not do this in your projects
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
