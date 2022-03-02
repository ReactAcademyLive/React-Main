import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(props) {
  let classname = 'footer mt-auto bg-dark text-light py-3';
  if (props?.className) {
    classname = classname
      .split(' ')
      .concat(props.className.split(' '))
      .join(' ');
  }

  return (
    <footer {...props} className={classname}>
      <Container>Copyright 2022</Container>
    </footer>
  );
}
