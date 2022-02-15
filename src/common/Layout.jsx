import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';

export default function Layout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Menu />
      <Container className='mb-5'>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
