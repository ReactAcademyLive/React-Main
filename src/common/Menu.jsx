import React from 'react';
import {
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
            <NavItem>
              <NavLink tag={RRNavLink} to='/about'>
                About
              </NavLink>
            </NavItem>
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
                <DropdownItem tag={RRNavLink} to='/context/reference'>
                  Using references
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
                  cloneElement
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/best/step4'>
                  Higher-Order Component
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/best/step5'>
                  Render Props
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/best/step6'>
                  Custom Hooks
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <ToggleMenu name='Todos' link='todos' />
              <DropdownMenu>
                <DropdownItem tag={RRNavLink} to='/todos/ClassicState'>
                  Classic State
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ContextHooks'>
                  Context and hooks
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RRNavLink} to='/todos/ReduxClassic'>
                  Classic Redux — connect
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ReduxHooks'>
                  Classic Redux — hooks
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={RRNavLink} to='/todos/ToolkitClassic'>
                  Redux Toolkit — connect
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/ToolkitHooks'>
                  Redux Toolkit — hooks
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink tag={RRNavLink} to='/reddits'>
                Reddits
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/clock'>
                Clock
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
      </Navbar>
    </div>
  );
}
