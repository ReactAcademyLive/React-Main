import { ReactNode } from 'react';
import { Root, createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Contacts from '../../data/contacts/contact-list/Contacts-hooks';
import { beforeEach, afterEach, it, expect, vi } from 'vitest';
import Contact from '../../data/contacts/contact-api/ContactType';

let container: HTMLDivElement | null = null;
let root: Root | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  act(() => {
    root?.unmount();
  });
  container?.remove();
  container = null;
});

vi.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: ReactNode }) => {
      return <a href='/mocked'>{children}</a>;
    },
    Form: ({ children }: { children: ReactNode }) => {
      return <form>{children}</form>;
    },
  };
});

it('Can display fake data, second TD is Dan...', async () => {
  const fakeData: Contact[] = [
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

  // @ts-ignore
  vi.spyOn(globalThis, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeData),
    });
  });

  await act(async () => {
    root?.render(<Contacts />);
  });

  expect(document.querySelectorAll('td')[1].textContent).toBe('Dan');

  // @ts-ignore
  globalThis.fetch.mockRestore();
});
