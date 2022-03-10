import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer({ className, ...rest }) {
  let classes = 'footer mt-auto bg-dark text-light py-3';
  if (className) {
    classes = className.split(' ').concat(className.split(' ')).join(' ');
  }

  return (
    <footer {...rest} className={classes}>
      <Container>Copyright 2022</Container>
    </footer>
  );
}
