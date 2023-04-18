import { Suspense } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';

export default function Root() {
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
        <Suspense fallback={<Spinner variant='primary' animation='border' />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </div>
  );
}
