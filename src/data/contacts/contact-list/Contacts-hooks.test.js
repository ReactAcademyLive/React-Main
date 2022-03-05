import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contacts from './Contacts-hooks';

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

//This
jest.mock('react-router-dom', () => ({
  Link: (props) => {
    return <a href='/mocked'>{props.children}</a>;
  },
}));

it('Can display fake data, second TD is Dan...', async () => {
  const fakeData = [
    {
      id: 1,
      firstName: 'Dan',
      lastName: 'Abramov',
      email: 'DanAbramov@facebook.com',
    },
    {
      id: 2,
      firstName: 'Eric',
      lastName: 'Cote',
      email: 'EricCote@reactAcademy.ca',
    },
  ];

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    })
  );

  await act(async () => {
    render(<Contacts />, container);
  });

  expect(document.querySelectorAll('td')[1].textContent).toBe('Dan');

  global.fetch.mockRestore();
});
