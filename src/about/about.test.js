import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import About from './about';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('displays Eric as the first author', () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.querySelector('li').textContent).toBe('Eric');
});

it('displays Joe as the second author', () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.querySelectorAll('li')[1].textContent).toBe('Joe');
});

it('displays Bob as the third author', () => {
  act(() => {
    render(<About />, container);
  });
  expect(container.querySelectorAll('li')[2].textContent).toBe('Bob');
});
