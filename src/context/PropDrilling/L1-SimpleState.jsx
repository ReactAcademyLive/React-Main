import React, { useState } from 'react';
import BlueBox from './LeftL2-BlueBox';
import GreyBox from './RightL2-GreyBox';
import { Row, Col } from 'react-bootstrap';

/* eslint-disable no-unused-vars, no-eval */
export default function SimpleState() {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    eval(str);
  }

  return (
    <Row>
      <Col md='6'>
        <BlueBox firstName={firstName} color={color} />
      </Col>
      <Col md='6'>
        <GreyBox firstName={firstName} color={color} onChange={change} />
      </Col>
    </Row>
  );
}
