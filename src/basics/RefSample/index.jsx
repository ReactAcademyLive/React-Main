import React, { useState, createRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import MyInput from './MyInput';

export default function RefSample(props) {
  const [theState, setTheState] = useState('Controlled component');
  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();

  return (
    <>
      <h1>Working with references</h1>
      <div>
        <h4>Using State</h4>
        <Form.Control
          type='text'
          value={theState}
          onChange={(evt) => setTheState(evt.target.value)}
        />
        <Button
          onClick={() => alert(theState)}
          variant='primary'
          className='mt-2 mb-4'
        >
          Show value
        </Button>
      </div>

      <div>
        <h4>Using id</h4>
        <input
          type='text'
          className='form-control'
          id='id1'
          //Every id should be unique on a page. Is that the case?
          //Problem: React cannot ensure that ids are unique.
          defaultValue='get component by id '
        />
        <Button
          onClick={() => alert(document.getElementById('id1').value)}
          variant='primary'
          className='mt-2 mb-4'
        >
          Show value
        </Button>
      </div>

      <div>
        <h4>Using Reference</h4>
        <input
          type='text'
          className='form-control'
          ref={ref1}
          defaultValue='Using reference'
        />
        <Button
          onClick={() => alert(ref1.current.value)}
          variant='primary'
          className='mt-2 mb-4'
        >
          Show value
        </Button>
      </div>

      <div>
        <h4>Broken Reference</h4>
        <input
          type='text'
          className='form-control'
          ref={ref2}
          defaultValue='Using reference2'
        />
        <Button
          onClick={() => alert('This must be fixed')}
          variant='primary'
          className='mt-2 mb-4'
        >
          Show value
        </Button>
      </div>

      <div>
        <h4>Using Forwarding Reference</h4>
        <MyInput innerRef={ref3} defaultValue='Other uncontrolled component' />
        <Button
          onClick={() => alert(ref3.current.value)}
          variant='primary'
          className='mt-2 mb-4'
        >
          Show value
        </Button>
      </div>
    </>
  );
}
