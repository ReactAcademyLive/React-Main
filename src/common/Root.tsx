import { Suspense } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Outlet, useMatches } from 'react-router-dom';
import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';

interface IMatch {
  handle: {
    title?: string;
  };
}

export default function Root() {
  const matches = useMatches(); // getting the list of matches
  const currentMatch = matches[matches.length - 1] as IMatch; //Get the last match
  document.title = currentMatch?.handle?.title ?? 'React Academy';

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
