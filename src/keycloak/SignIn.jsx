import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './AuthProvider';

export default function Signin() {
  const auth = useAuth();

  function loginBtn(evt) {
    auth.login();
  }

  return auth?.token ? (
    <>
      <h1>Welcome authenticated</h1>
    </>
  ) : (
    <Button onClick={loginBtn}>Login</Button>
  );
}
