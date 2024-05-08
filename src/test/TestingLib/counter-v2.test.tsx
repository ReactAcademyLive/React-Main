import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../../counter/hooks/counter-v2';
import { describe, it, expect, beforeEach } from 'vitest';

let textbox: HTMLInputElement | null = null;

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter init={5} />);
    textbox = screen.getByRole('textbox') as HTMLInputElement;
  });

  it('Both numbers shown are equal', () => {
    const h1: HTMLHeadingElement = screen.getByRole('heading', {
      name: /the count is:/i,
    });

    const num1 = +h1.textContent!.split(' ')?.reverse()[0];
    const num2 = +textbox!.value;

    expect(num1).toBe(num2);
  });

  it('Validate that the number is 6 after we click the button', async () => {
    userEvent.click(
      screen.getByRole('button', {
        name: 'increment 1',
      }),
    );

    await waitFor(() => {
      expect(+textbox!.value).toBe(6);
    });
  });
});
