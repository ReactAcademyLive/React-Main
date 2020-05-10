import React, { useState } from 'react';
import ColoredPart from './LeftL2-ColoredPart';
import ChangePart from './RightL2-ChangePart';
import { Row, Col } from 'reactstrap';
import MyContext from './MyContext';

export default function SimpleContext() {
  const [firstName, setFirstName] = useState('John');
  const [color, setColor] = useState('blue');

  //the folloing is to avoid the ESLint warning that
  //we're not calling the "set" methods.
  if ((setFirstName, setColor)) {
  }

  function change(evt) {
    const { name, value } = evt.target;

    const fnName = 'set' + name[0].toUpperCase() + name.slice(1);
    const str = `${fnName}("${value}")`;

    // eslint-disable-next-line
    eval(str);
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
