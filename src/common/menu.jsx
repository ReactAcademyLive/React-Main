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
  DropdownItem
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from './logo.svg';
import ToggleMenu from './toggle-menu';

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
              <ToggleMenu name='Contacts' link='contacts' />
              <DropdownMenu>
                <DropdownItem tag={RRNavLink} to='/contacts/hooks'>
                  Contacts using hooks
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/contacts/class'>
                  Contacts using classes
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
                  With Context
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
                <DropdownItem tag={RRNavLink} to='/todos/StarterClassic'>
                  Redux Starter Kit — connect
                </DropdownItem>
                <DropdownItem tag={RRNavLink} to='/todos/StarterHooks'>
                  Redux Starter Kit — hooks
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

            <NavItem>
              <NavLink tag={RRNavLink} to='/mouser'>
                Mouser
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
