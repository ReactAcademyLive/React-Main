import { Container } from 'react-bootstrap';

interface FooterProps {
  className?: string;
}

export default function Footer({ className, ...rest }: FooterProps) {
  let classes = 'footer mt-auto bg-dark text-light py-3';
  if (className) {
    classes = className.split(' ').concat(className.split(' ')).join(' ');
  }

  return (
    <footer {...rest} className={classes}>
      <Container>Copyright 2024</Container>
    </footer>
  );
}
