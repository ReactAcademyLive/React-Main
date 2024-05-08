import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

export default function SignOff() {
  const auth = useAuth();

  function logoutBtn() {
    auth.logout!();
  }

  return auth?.token ? (
    <Button onClick={logoutBtn}>Logout</Button>
  ) : (
    <h1>You are logged out!</h1>
  );
}
