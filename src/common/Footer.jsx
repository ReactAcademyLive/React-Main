import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer(props) {
  return (
    <footer className='bg-dark text-light py-3 ' {...props}>
      <Container>Copyright 2022</Container>
    </footer>
  );
}
