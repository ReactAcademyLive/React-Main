import { useState } from 'react';
import BlueBox from './L2Left-BlueBox';
import GreyBox from './L2Right-GreyBox';
import { Row, Col, Form } from 'react-bootstrap';

export default function SimpleContainment() {
  const [firstName, setFirstName] = useState<string>('John');
  const [color, setColor] = useState<string>('blue');

  const displayData = <h1 style={{ color: color }}>The name is {firstName}</h1>;

  const modifyData = (
    <>
      <Form.Control
        value={firstName}
        name='firstName'
        placeholder='First Name'
        onChange={(evt) => setFirstName(evt.target.value)}
        className='mb-4'
      />
      <Form.Control
        value={color}
        name='color'
        placeholder='Color'
        onChange={(evt) => setColor(evt.target.value)}
      />
    </>
  );

  return (
    <Row>
      <Col md='6'>
        <BlueBox>{displayData}</BlueBox>
      </Col>
      <Col md='6'>
        <GreyBox>{modifyData}</GreyBox>
      </Col>
    </Row>
  );
}
