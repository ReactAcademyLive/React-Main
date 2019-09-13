import React, { useState } from 'react';
import ColoredPart from './colored-part';
import ChangePart from './change-part';
import { Row, Col } from 'reactstrap';

export default function SimpleContext() {
  const [name, setName] = useState('John');
  const [color, setColor] = useState('blue');

  // eslint-disable-next-line
  function change(newName, newColor) {
    setName(newName);
    setColor(newColor);
  }

  return (
    <Row>
      <Col md='6'>
        <ColoredPart name={name} color={color} />
      </Col>
      <Col md='6'>
        <ChangePart  />
      </Col>
    </Row>
  );
}
