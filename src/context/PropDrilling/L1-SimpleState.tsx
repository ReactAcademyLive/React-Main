/* eslint-disable @typescript-eslint/no-unused-vars,no-eval */
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import BlueBox from './L2Left-BlueBox';
import GreyBox from './L2Right-GreyBox';
import { Row, Col } from 'react-bootstrap';

export default function SimpleState() {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  function change(evt: ChangeEvent<HTMLInputElement>) {
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
