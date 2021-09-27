import React, { useState } from 'react';
import BlueBox from './LeftL2-BlueBox';
import GreyBoxes from './RightL2-GreyBoxes';
import { Row, Col } from 'react-bootstrap';
import MyContext from './MyContext';

/* eslint-disable no-unused-vars, no-eval */
export default function SimpleContext() {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    eval(str);
  }

  return (
    <MyContext.Provider value={{ firstName, color, onChange: change }}>
      <Content />
    </MyContext.Provider>
  );
}

//the following would prevent the content from re-rendering
//when the props are the same (hint: here they are always the same)
//var MemoContent = React.memo(Content);

function Content() {
  return (
    <Row>
      <Col md='6'>
        <BlueBox />
      </Col>
      <Col md='6'>
        <GreyBoxes />
      </Col>
    </Row>
  );
}
