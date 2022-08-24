import React, { useState, useEffect, createContext } from 'react';
import Keycloak from 'keycloak-js';

export const AuthContext = createContext({ user: null });

function AuthProvider({ config, children }) {
  const [keycloak] = useState(new Keycloak(config));
  const [, refresh] = useState({});

  useEffect(() => {
    keycloak.onAuthRefreshSuccess = refresh({});
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      //do nothing
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
      value={{
        token: keycloak.token,
        tokenParsed: keycloak.tokenParsed,
        login: keycloak.login,
        logout: keycloak.logout,
        keycloak,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export function useAuth() {
  let authCtx = useContext(AuthContext);
  return authCtx;
}
