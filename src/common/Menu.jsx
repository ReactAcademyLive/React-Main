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
                <Nav.Link as={NavLink} to='/'>
                  Home
                </Nav.Link>
              </Nav.Item>
              <NavDrop title='Basics' link='basics'>
                <NavDropdown.Item as={NavLink} to='/about'>
                  Display list
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/lifecycle'>
                  Hooks Lifecyle
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/context/reference'>
                  Using references
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/myform'>
                  Form validation
                </NavDropdown.Item>
              </NavDrop>

              <NavDrop title='Counter' link='counter'>
                <NavDropdown.Item as={NavLink} to='/counter/classes'>
                  Counter with classes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v1'>
                  Counter with hooks - V1
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v2'>
                  Counter with hooks - V2
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v3'>
                  Counter with hooks - V3
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v4'>
                  Counter with hooks - V4
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/counter/hooks-v5'>
                  Counter with hooks - V5
                </NavDropdown.Item>
              </NavDrop>

              <NavDrop title='Data' link='data'>
                <NavDropdown.Item as={NavLink} to='/data/covid'>
                  Covid
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/videos'>
                  Videos
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/hooks'>
                  Contacts using hooks
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/class'>
                  Contacts using classes
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/map'>
                  Map with pins
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/data/election'>
                  Election Results (context provider and hooks)
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
