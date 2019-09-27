import React, { useState } from 'react';
import ColoredPart from './LeftL2-ColoredPart';
import ChangePart from './RightL2-ChangePart';
import { Row, Col } from 'reactstrap';

export default function SimpleState() {
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
    <Row>
      <Col md='6'>
        <ColoredPart firstName={firstName} color={color} />
      </Col>
      <Col md='6'>
        <ChangePart firstName={firstName} color={color} onChange={change} />
      </Col>
    </Row>
  );
}
