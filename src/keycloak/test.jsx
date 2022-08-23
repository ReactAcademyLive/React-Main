import React from 'react';
import AuthProvider, { AuthContext } from './AuthProvider';

function TestAuth() {
  return (
    <AuthProvider
      config={{
        url: 'https://keycloak2.reactacademy.live',
        realm: 'react-courses',
        clientId: 'August',
      }}
    >
      <Content />
    </AuthProvider>
  );
}

function Content() {
  const authContext = React.useContext(AuthContext);

  return <button></button>;
}

export default TestAuth;
