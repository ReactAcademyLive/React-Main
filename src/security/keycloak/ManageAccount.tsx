import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

export default function ManageAccount() {
  const auth = useAuth();

  return auth?.token ? (
    <Button onClick={auth.keycloak!.accountManagement}>Manage Account</Button>
  ) : (
    <h1>Not authenticated!</h1>
  );
}
