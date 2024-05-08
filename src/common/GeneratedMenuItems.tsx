import { Nav, NavDropdown } from 'react-bootstrap';
import NavDrop from './NavDrop';
import routes from './Router';
import { NavLink } from 'react-router-dom';

interface MenuProps {
  advanced: boolean;
}

export default function GeneratedMenuItems({ advanced }: MenuProps) {
  const menuItems = routes.routes[0].children!.filter(
    (r) => r?.handle?.advanced === advanced,
  );
  const renderedMenu = menuItems.map((m) => {
    let margin = false;
    return m.handle?.dropMenu ? (
      <NavDrop title={m.handle.dropMenu} link={m.path!} key={m.path!}>
        {m.children!.map((s) => {
          const fullpath = `/${m.path}/${s.path}`;
          return s.path?.startsWith('divider') ? (
            <NavDropdown.Divider key={fullpath} />
          ) : s.path?.startsWith('heading') ? (
            <NavDropdown.Header key={fullpath}>
              {s.handle.title}
              {(margin = true)}
            </NavDropdown.Header>
          ) : s.handle?.title ? (
            <NavDropdown.Item
              key={fullpath}
              as={NavLink}
              to={fullpath}
              className={margin ? 'ps-5' : ''}
            >
              {s.handle.title}
            </NavDropdown.Item>
          ) : null;
        })}
      </NavDrop>
    ) : m.handle?.title ? (
      <Nav.Link as={NavLink} to={m.path ?? '/'} key={m.path ?? '/'}>
        {m.handle?.title}
      </Nav.Link>
    ) : null;
  });

  return renderedMenu;
}
