import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

export default function Signup() {
  const auth = useAuth();

  function resetBtn() {
    auth.login({ action: 'UPDATE_PASSWORD' });
  }

  return (
    <>
      <Button onClick={resetBtn}>
        {auth?.token ? 'Change current password' : 'Reset Password'}
      </Button>
      <p className='mt-5'>Will reset password when not authenticated.</p>
      <p>Will change password when authenticated.</p>
    </>
  );
}
