import { Button } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';

export default function SignIn() {
  const auth = useMsal();

  function loginBtn() {
    auth.instance.loginRedirect();
  }

  return auth.instance.getActiveAccount() ? (
    <>
      <h1>Welcome {auth.instance.getActiveAccount()?.name}</h1>
      <p>email : {auth.instance.getActiveAccount()?.username}</p>
    </>
  ) : (
    <>
      <Button onClick={loginBtn}>Login</Button>

      <p className='mt-5'>Here are some test users:</p>
      <dl className='ms-3'>
        <dt>user1@reactacademy.onmicrosoft.com</dt>
        <dd>Member of role: app-user</dd>
        <dt>user2@reactacademy.onmicrosoft.com</dt>
        <dd>Member of role: app-user and app-admin</dd>
      </dl>

      <p>
        All above logins have password: <b>React1234!</b>
      </p>
      <p>
        You could also crete your own account using the bottom link on the login
        page
      </p>
    </>
  );
}
