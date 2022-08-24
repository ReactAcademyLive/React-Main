import React, { useState, useEffect, useContext, createContext } from 'react';
import Keycloak from 'keycloak-js';

export const AuthContext = createContext({ user: null });

const conf = {
  url: 'https://keycloak2.reactacademy.live/',
  realm: 'react-courses',
  clientId: 'august-course',
};

function AuthProvider({ config = conf, children }) {
  const [keycloak] = useState(new Keycloak(config));
  const [, refresh] = useState({});

  useEffect(() => {
    keycloak.onAuthRefreshSuccess = refresh({});
    keycloak.init({ checkLoginIframe: false }).then((authenticated) => {
      //do nothing
    });
  }, [keycloak]);

  // async function refreshDoc(user) {
  //   const doc = await getUserDocument(user.uid);
  //   setUser({
  //     ...user,
  //     displayName: user.displayName ?? doc?.displayName,
  //     photoURL: user.photoURL ?? doc?.photoURL,
  //   });
  // }

  console.log('context is generated');
  console.log(keycloak.idTokenParsed?.nonce);

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
