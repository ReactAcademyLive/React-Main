import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import About from '../../basics/list/index';

//This test is showing that:
//You don't need a testing library
//just the basic React libs and
//Dom validation are sufficient to test

let container = null;
let root = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  act(() => root.unmount());
  container.remove();
  container = null;
});

it('displays Eric as the first author', () => {
  act(() => {
    root.render(<About />);
  });

  expect(container.querySelector('li').textContent).toBe('Eric');
});

it('displays Joe as the second author', () => {
  act(() => {
    root.render(<About />);
  });

  expect(container.querySelectorAll('li')[1].textContent).toBe('Joe');
});

it('displays Bob as the third author', () => {
  act(() => {
    root.render(<About />);
  });

  expect(container.querySelectorAll('li')[2].textContent).toBe('Bob');
});
