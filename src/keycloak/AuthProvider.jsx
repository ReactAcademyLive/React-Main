import React, { useState, useEffect, createContext } from 'react';
import Keycloak from 'keycloak-js';

export const AuthContext = createContext({ user: null });

function AuthProvider({ config, children }) {
  const [keycloak] = useState(new Keycloak(config));
  const [token, setToken] = useState(null);

  useEffect(() => {
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      if (authenticated) {
        setToken(keycloak.tokenParsed);
        console.log('!!!!!');
        console.log(keycloak.tokenParsed);
      }
    });
  }, []);

  // async function refreshDoc(user) {
  //   const doc = await getUserDocument(user.uid);
  //   setUser({
  //     ...user,
  //     displayName: user.displayName ?? doc?.displayName,
  //     photoURL: user.photoURL ?? doc?.photoURL,
  //   });
  // }

  return (
    <AuthContext.Provider
      value={{ token, login: keycloak.login, logout: keycloak.logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
