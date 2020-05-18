import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';
import MyInput from './MyInput';

export default function RefSample(props) {
  const [theState, setTheState] = useState('Controlled component');
  //const myRef1 = React.createRef();
  const myRef2 = React.createRef();

  function change(evt) {
    setTheState(evt.target.value);
  }

  function showState() {
    alert(`the state is: ${theState}`);
  }

  function showRef1() {
    alert(`The reference is: ${document.getElementById('id1').value}`);
    //comment previous, uncomment next line
    //alert(`The reference is: ${myRef1.current.value}`);
  }

  function showRef2() {
    alert(`The reference is: ${myRef2.current?.value}`);
  }
  return (
    <>
      <h1>Working with references</h1>
      <div>
        <h4>Using State</h4>
        <Input type='text' value={theState} onChange={change} />
        <Button onClick={showState} color='primary' className='mt-2 mb-4'>
          Show value
        </Button>
      </div>

      <div>
        <h4>Using Reference</h4>
        <input
          type='text'
          className='form-control'
          id='id1' //Every id should be unique on a page. Is that the case?
          //comment previous, uncomment next line
          //ref={myRef1}
          defaultValue='Uncontrolled component'
        />
        <Button onClick={showRef1} color='primary' className='mt-2 mb-4'>
          Show value
        </Button>
      </div>

      <div>
        <h4>Using Forwarding Reference</h4>
        <MyInput ref={myRef2} defaultValue='Other uncontrolled component' />
        <Button onClick={showRef2} color='primary' className='mt-2 mb-4'>
          Show value
        </Button>
      </div>
    </>
  );
}
