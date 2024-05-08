import { Button } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';

export default function SignOff() {
  const auth = useMsal();

  function logoutBtn() {
    auth.instance.logoutRedirect({
      postLogoutRedirectUri: location.href,
    });
  }

  return auth.instance.getActiveAccount() ? (
    <Button onClick={logoutBtn}>
      Logout {auth.instance.getActiveAccount()?.username}
    </Button>
  ) : (
    <h1>You are logged out!</h1>
  );
}
