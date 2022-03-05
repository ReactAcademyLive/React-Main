import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MyForm from './ValidatedForm';

const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
});

describe('Formulaire', () => {
  beforeEach(() => {
    render(<MyForm login={mockLogin} />);
  });

  it('should display required error when value is invalid', async () => {
    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(2);
    expect((await screen.findAllByRole('alert'))[0].textContent).toBe(
      'required'
    );
    expect(mockLogin).not.toBeCalled();
  });

  it('should display matching error when email is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test',
      },
    });

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('test');
    expect(screen.getByLabelText('Password').value).toBe('password');
  });

  it('should display min length error when password is invalid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'pass',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    expect(await screen.findAllByRole('alert')).toHaveLength(1);
    expect(mockLogin).not.toBeCalled();
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe(
      'test@mail.com'
    );
    expect(screen.getByLabelText('Password').value).toBe('pass');
  });

  it('should not display error when value is valid', async () => {
    fireEvent.input(screen.getByRole('textbox', { name: /email/i }), {
      target: {
        value: 'test@mail.com',
      },
    });

    fireEvent.input(screen.getByLabelText('Password'), {
      target: {
        value: 'password',
      },
    });

    fireEvent.submit(screen.getByRole('button'));

    await waitFor(() => expect(screen.queryAllByRole('alert')).toHaveLength(0));
    expect(mockLogin).toBeCalledWith('test@mail.com', 'password');
    expect(screen.getByRole('textbox', { name: /email/i }).value).toBe('');
    expect(screen.getByLabelText('Password').value).toBe('');
  });
});
