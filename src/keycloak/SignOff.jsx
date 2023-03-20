import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

export default function Signin() {
  const auth = useAuth();

  function logoutBtn(evt) {
    auth.logout();
  }

  return auth?.token ? (
    <Button onClick={logoutBtn}>Logout</Button>
  ) : (
    <h1>You are logged out!</h1>
  );
}
