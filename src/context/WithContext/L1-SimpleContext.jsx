import React, { useState } from 'react';
import ColoredPart from './LeftL2-ColoredPart';
import ChangePart from './RightL2-ChangePart';
import { Row, Col } from 'reactstrap';
import MyContext from './MyContext';

export default function SimpleContext() {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  function change(evt) {
    const { name, value } = evt.target;

    if (name === 'firstName') {
      setFirstName(value);
    }
    if (name === 'color') {
      setColor(value);
    }
  }

  return (
    <MyContext.Provider value={{ firstName, color, onChange: change }}>
      <Row>
        <Col md='6'>
          <ColoredPart />
        </Col>
        <Col md='6'>
          <ChangePart />
        </Col>
      </Row>
    </MyContext.Provider>
  );
}
