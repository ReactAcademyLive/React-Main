import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './counter-v2';

let textbox;

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter init={5} />);
    textbox = screen.getByRole('textbox');
  });

  it('Nombre qui est égal à deux endroits', () => {
    const h1 = screen.getByRole('heading', {
      name: /the count is:/i,
    });

    let num1 = +h1.textContent.split(' ').reverse()[0];
    let num2 = +textbox.value;

    expect(num1).toBe(num2);
  });

  it('valider quand on clique 1 fois sur le boutton', () => {
    userEvent.click(
      screen.getByRole('button', {
        name: 'increment 1',
      })
    );
    expect(+textbox.value).toBe(6);
  });
});
