import React from 'react';
import { Container } from 'reactstrap';

export default function Footer(props) {
  return (
    <footer className='bg-dark text-light py-3 mt-auto' {...props}>
      <Container>Copyright 2020</Container>
    </footer>
  );
}
