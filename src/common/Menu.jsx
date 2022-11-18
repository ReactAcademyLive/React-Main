import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import DarkModeButton from './DarkModeButton';
import NavDrop from './NavDrop';

export default function Menu() {
  return (
    <div className='mb-4'>
      <Navbar bg='dark' variant='dark' expand='md'>
        <Container fluid>
          <Navbar.Brand as={NavLink} to='/'>
            <img src={logo} height='40' alt='Logo' />
            React Academy
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <Nav.Link as={NavLink} to='/' end>
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDrop title='Basics' link='basics'>
                <NavDropdown.Item as={NavLink} to='/basics/list'>
                  Display list
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/basics/lifecycle'>
                  Hooks Lifecyle
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/basics/reference'>
                  Using references
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/basics/myform'>
                  Form validation
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/basics/rendering'>
                  Rendering
                </NavDropdown.Item>
              </NavDrop>

              <NavDrop title='Counter' link='counter'>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v1'>
                  Simple Counter without save
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v2'>
                  Saving to local storage
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v3'>
                  Saving Local Storage with hooks
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/counter/classes'>
                  Older Counter using classes
                </NavDropdown.Item>
              </NavDrop>

              <NavDrop title='Data' link='data'>
                <NavDropdown.Header>with Hooks</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/covid'
                  className='ps-5'
                >
                  Covid
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/videos'
                  className='ps-5'
                >
                  Videos
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/map' className='ps-5'>
                  Map with pins
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/election'
                  className='ps-5'
                >
                  Election Results (context provider)
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/contacts'
                  className='ps-5'
                >
                  Contacts
                </NavDropdown.Item>
                <NavDropdown.Header>with Data Router</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/contacts-data-router'
                  className='ps-5'
                >
                  Contacts
                </NavDropdown.Item>
                <NavDropdown.Header>Legacy (classes)</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/data/contacts-classes'
                  className='ps-5'
                >
                  Contacts
                </NavDropdown.Item>
              </NavDrop>
              <NavDrop title='Context' link='context'>
                <NavDropdown.Item as={NavLink} to='/context/PropDrill'>
                  Property Drilling (no context)
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/context/WithContext'>
                  Context
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/context/containment'>
                  Containment
                </NavDropdown.Item>
              </NavDrop>
              <NavDrop title='Best Practices' link='best'>
                <NavDropdown.Item as={NavLink} to='/best/step1'>
                  Single component
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/best/step2'>
                  Split components
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/best/step3'>
                  Containment with children (2014)
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/best/step4'>
                  Higher-Order Component (2015)
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/best/step5'>
                  Render Props (2016)
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/best/step6'>
                  Custom Hooks (2019)
                </NavDropdown.Item>
              </NavDrop>
              <NavDrop title='Todos' link='todos'>
                <NavDropdown.Header>No Redux</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ClassicState'
                  className='ps-5'
                >
                  Classic State
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ContextHooks'
                  className='ps-5'
                >
                  Context and hooks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Redux Toolkit</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ToolkitHooks'
                  className='ps-5'
                >
                  Redux Toolkit — hooks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Old Redux</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ReduxClassic'
                  className='ps-5'
                >
                  Classic Redux — connect
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ReduxHooks'
                  className='ps-5'
                >
                  Classic Redux — hooks
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/todos/ToolkitClassic'
                  className='ps-5'
                >
                  Redux Toolkit — connect
                </NavDropdown.Item>
              </NavDrop>
              <NavDrop title='Reddit' link='reddit'>
                <NavDropdown.Header>Redux Toolkit</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/reddit/toolkitNoThunk'
                  className='ps-5'
                >
                  Redux Toolkit — No Thunk
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/reddit/toolkitThunk'
                  className='ps-5'
                >
                  Redux Toolkit — Thunks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Header>Old Redux</NavDropdown.Header>
                <NavDropdown.Item
                  as={NavLink}
                  to='/reddit/classicNoThunk'
                  className='ps-5'
                >
                  Classic Redux - No Thunks
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={NavLink}
                  to='/reddit/classicThunk'
                  className='ps-5'
                >
                  Classic Redux - Thunks
                </NavDropdown.Item>
              </NavDrop>

              <Nav.Item>
                <Nav.Link as={NavLink} to='/clock'>
                  Perf
                </Nav.Link>
              </Nav.Item>
              <NavDrop title='Security' link='auth'>
                <NavDropdown.Item as={NavLink} to='/auth/signup'>
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/signin'>
                  Sign In
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/profile'>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/passwordreset'>
                  Reset Password
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/apicalls'>
                  Api Calls
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/manageaccount'>
                  Manage Account
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/secret'>
                  Secret section
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/auth/signoff'>
                  Sign Off
                </NavDropdown.Item>
              </NavDrop>
              <DarkModeButton />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
