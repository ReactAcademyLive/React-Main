import React from 'react';
import { Container } from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';
import './custom.scss';
import Menu from './Menu';
import Footer from './Footer';
import MyRouting from './MyRouting';
import UserProvider from './UserProvider';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <div
            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Menu />
            <Container className='mb-5'>
              <MyRouting />
            </Container>
            <Footer />
          </div>
        </UserProvider>
      </BrowserRouter>
    );
  }
}
