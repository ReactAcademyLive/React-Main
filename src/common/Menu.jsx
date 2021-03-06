import React from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from './logo.svg';
import ToggleMenu from './ToggleMenu';
import DarkModeButton from './DarkModeButton';

export default function Menu() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className='mb-4'>
      <Navbar color='dark' dark expand='md'>
        <Container fluid>
          <NavbarBrand tag={RRNavLink} to='/' exact>
            <img src={logo} height='40' alt='Logo' />
            React Academy
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to='/' exact>
                  Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Basics' link='basics' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/about'>
                    Display list
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/lifecycle'>
                    Hooks Lifecyle
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/context/reference'>
                    Using references
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Counter' link='counter' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/counter/classes'>
                    Counter with classes
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={RRNavLink} to='/counter/hooks-v1'>
                    Counter with hooks - V1
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/counter/hooks-v2'>
                    Counter with hooks - V2
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/counter/hooks-v3'>
                    Counter with hooks - V3
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/counter/hooks-v4'>
                    Counter with hooks - V4
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/counter/hooks-v5'>
                    Counter with hooks - V5
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Data' link='data' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/data/covid'>
                    Covid
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/data/hooks'>
                    Contacts using hooks
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/data/class'>
                    Contacts using classes
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/data/map'>
                    Map with pins
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/data/election'>
                    Election Results (context provider and hooks)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Context' link='context' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/context/PropDrill'>
                    Property Drilling (no context)
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/context/WithContext'>
                    Context
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/context/containment'>
                    Containment
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Best Practices' link='best' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/best/step1'>
                    Single component
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/best/step2'>
                    Split components
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/best/step3'>
                    Containment with children (2014)
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/best/step4'>
                    Higher-Order Component (2015)
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/best/step5'>
                    Render Props (2016)
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/best/step6'>
                    Custom Hooks (2019)
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Todos' link='todos' />
                <DropdownMenu>
                  <DropdownItem header>No Redux</DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ClassicState'
                    className='ps-5'
                  >
                    Classic State
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ContextHooks'
                    className='ps-5'
                  >
                    Context and hooks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Redux Toolkit</DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ToolkitHooks'
                    className='ps-5'
                  >
                    Redux Toolkit — hooks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Old Redux</DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ReduxClassic'
                    className='ps-5'
                  >
                    Classic Redux — connect
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ReduxHooks'
                    className='ps-5'
                  >
                    Classic Redux — hooks
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/todos/ToolkitClassic'
                    className='ps-5'
                  >
                    Redux Toolkit — connect
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Reddit' link='reddit' />
                <DropdownMenu>
                  <DropdownItem header>Redux Toolkit</DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/reddit/toolkitFetch'
                    className='ps-5'
                  >
                    Redux Toolkit — Hooks
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/reddit/toolkitThunk'
                    className='ps-5'
                  >
                    Redux Toolkit — Thunks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>Old Redux</DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/reddit/classicFetch'
                    className='ps-5'
                  >
                    Classic Redux
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to='/reddit/classicThunk'
                    className='ps-5'
                  >
                    Classic Redux thunks
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink tag={RRNavLink} to='/clock'>
                  Perf
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <ToggleMenu name='Security' link='auth' />
                <DropdownMenu>
                  <DropdownItem tag={RRNavLink} to='/auth/signup'>
                    Sign Up
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/auth/signin'>
                    Sign In
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/auth/profile'>
                    Profile
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/auth/passwordreset'>
                    Reset Password
                  </DropdownItem>
                  <DropdownItem tag={RRNavLink} to='/auth/signoff'>
                    Sign Off
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <DarkModeButton />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
