import { useState } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { Placement } from '@popperjs/core';

interface Person {
  name: string;
  count: number;
  address: { city: string; deepCount: number };
}

interface Scenarios {
  placement: Placement;
  fn: () => void;
  variant: string;
  text: string;
  code: string;
  details: string;
}

interface MyButtonProps {
  placement: Placement;
  fn: () => void;
  children: any;
  variant: string;
  details: string;
  code: string;
}

export default function Rendering() {
  const [person, setPerson] = useState<Person>({
    name: 'Adam',
    count: 1,
    address: { city: 'Vancouver', deepCount: 1 },
  });

  const myArray: Scenarios[] = [
    {
      placement: 'auto',
      fn: () => {
        person.count += 1;
        setPerson(person);
      },
      variant: 'danger',
      text: 'Object Mutation',
      code: 'person.count += 1;\nsetPerson(person);',
      details:
        'When mutating the object, the new state is saved, but is NOT rendered by setState.',
    },
    {
      placement: 'bottom',
      fn: () => {
        person.count += 1;
        setPerson({ ...person });
      },
      variant: 'warning',
      text: 'Object mutation, then spread',
      code: 'person.count += 1;\nsetPerson({...person});',
      details: 'This now works, but mutation should be avoided.',
    },
    {
      placement: 'bottom',
      fn: () => {
        setPerson({ ...person, count: person.count + 1 });
      },
      variant: 'success',
      text: 'Spread, no mutation',
      code: 'setPerson({ ...person, count: person.count + 1 });',
      details:
        'This recommended. We just create a new object with no mutations.',
    },
    {
      placement: 'bottom',
      fn: () => {
        person.address.deepCount += 1;
        setPerson({ ...person });
      },
      variant: 'warning',
      text: 'Deep mutation, then spread',
      code: 'person.address.deepCount += 1;\nsetPerson({...person});',
      details: 'This works, but mutation should be avoided.',
    },
    {
      placement: 'auto',
      fn: () => {
        setPerson({
          ...person,
          address: {
            ...person.address,
            deepCount: person.address.deepCount + 1,
          },
        });
      },
      variant: 'success',
      text: 'Deep spread, no mutation',

      code: 'setPerson({\n  ...person,\n  address: {\n    ...person.address,\n    deepCount: person.address.deepCount + 1,\n  },\n});',
      details:
        'This is getting  complex. You could use a library like Immer js to manage the complexity of deep spread',
    },
  ];

  return (
    <>
      <h1>State objects, mutations and re-renders</h1>
      <div className='d-flex justify-content-between flex-column flex-lg-row'>
        {myArray.map((item) => (
          <MyButton
            placement={item.placement}
            fn={item.fn}
            variant={item.variant}
            details={item.details}
            code={item.code}
          >
            {item.text}
          </MyButton>
        ))}
      </div>
      <h4>Current State</h4>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <p>
        When mutating the object, the new state is saved, but is NOT rendered by
        setState. By creating a new object (using spread), you can force
        re-renders.
      </p>
      <p>
        You could use a library like Immer js to manage the complexity of deep
        spread
      </p>
      <p>
        React documentation is explicit that you should avoid mutating State :
      </p>

      <blockquote className='blockquote'>
        <p>
          In practice, you can often “get away” with mutating state in React,
          but we strongly advise you not to do that. You'll be able to use new
          React features developed with immuability in mind. Future contributors
          and perhaps even your future self will thank you!
        </p>
        <footer className='blockquote-footer'>
          <cite title='Source Title'>React Documentation</cite>
        </footer>
      </blockquote>
    </>
  );
}

function MyButton({
  placement = 'right',
  fn,
  children,
  variant,
  details,
  code,
}: MyButtonProps): JSX.Element {
  return (
    <OverlayTrigger
      placement={placement}
      overlay={
        <Popover style={{ maxWidth: '400px' }}>
          <Popover.Header as='h3' className='text-primary'>
            Code
          </Popover.Header>
          <Popover.Body>
            <pre>{code}</pre>
            {details}
          </Popover.Body>
        </Popover>
      }
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          onClick={fn}
          variant={variant}
          {...triggerHandler}
          ref={ref}
          className='my-1 mx-2'
        >
          {children}
        </Button>
      )}
    </OverlayTrigger>
  );
}
