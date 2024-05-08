import { useMsal } from '@azure/msal-react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const auth = useMsal();

  return (
    <>
      <h1>
        {auth.instance.getActiveAccount()
          ? `Welcome ${auth.instance.getActiveAccount()!.name}`
          : 'SignUp'}
      </h1>
      <p>
        Using <i>Entra External ID</i>, you simply have to use the{' '}
        <Link to='/auth/msal/signin'>SignIn</Link> page and to choose the bottom
        link to register.
      </p>
      <p>
        Using other <i>Entra ID B2C</i>, you could use a custom User Flow for
        the SignUp.
      </p>
    </>
  );
}
