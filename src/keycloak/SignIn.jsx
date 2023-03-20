import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

export default function Signin() {
  const auth = useAuth();

  function loginBtn(evt) {
    auth.login();
  }

  return auth?.token ? (
    <>
      <h1>
        Welcome {auth.idTokenParsed.given_name} {auth.idTokenParsed.family_name}
      </h1>
      <p>email : {auth.idTokenParsed.email}</p>
    </>
  ) : (
    <>
      <Button onClick={loginBtn}>Login</Button>

      <p className='mt-5'>Here are some test users:</p>
      <dl className='ms-3'>
        <dt>emp1@test.com</dt>
        <dd>Member of role: app-user</dd>
        <dt>emp2@test.com</dt>
        <dd>Member of role: app-user</dd>
        <dt>emp3@test.com</dt>
        <dd>Member of role: app-user and app-admin</dd>
      </dl>
      <p>
        All passwords are: <b>easypassword</b>
      </p>
    </>
  );
}
