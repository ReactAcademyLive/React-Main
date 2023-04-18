import { NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

interface NavDropProps {
  title: string;
  link: string;
  children: any;
}

export default function NavDrop({ title, link, children }: NavDropProps) {
  const location = useLocation();
  return (
    <NavDropdown
      title={title}
      active={location.pathname.startsWith('/' + link)}
    >
      {children}
    </NavDropdown>
  );
}
