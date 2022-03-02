import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useLocation, Outlet } from 'react-router-dom';
import { useTransition, animated, useSpringRef } from '@react-spring/web';

import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';

export default function Layout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        // display: 'flex',
        // flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <Menu />
      <Container className='position-relative mb-5'>
        <Content />
      </Container>
      <Footer className='fixed-bottom' />
    </div>
  );
}

function Content() {
  const transRef = useSpringRef();
  const location = useLocation();
  const transitions = useTransition(location.pathname, {
    ref: transRef,
    keys: null,
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    //from: { opacity: 0, transform: 'rotateY(-180deg)' },
    //enter: { opacity: 1, transform: 'rotateY(0deg)' },
    //leave: { opacity: 0, transform: 'rotateY(180deg)' },
    //config: { mass: 5, tension: 300, friction: 20 },
  });
  useEffect(() => {
    transRef.start();
  }, [location.pathname, transRef]);
  return transitions((style, i) => (
    <animated.div
      key={i}
      style={{
        ...style,
        position: 'absolute',
        width: '100%',
        paddingBottom: '100px',
      }}
    >
      <Outlet location={location} />
    </animated.div>
  ));
}
