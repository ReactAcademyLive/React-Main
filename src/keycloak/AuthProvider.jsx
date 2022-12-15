import React, { useState, useEffect, useContext, createContext } from 'react';
import Keycloak from 'keycloak-js';

export const AuthContext = createContext({ user: null });

const conf = {
  url: 'https://keycloak3.reactacademy.live/',
  realm: 'react-courses',
  clientId: 'august-course',
};

function AuthProvider({ config = conf, children }) {
  const [keycloak] = useState(new Keycloak(config));
  const [, refresh] = useState({});

  useEffect(() => {
    keycloak.onAuthRefreshSuccess = () => {
      console.log('token refreshed');
      refresh({});
    };
    keycloak.init({ checkLoginIframe: false }).then((authenticated) => {
      //    console.log(`Authenticated: ${authenticated}`);
      refresh({});
    });
  }, [keycloak]);

  return (
    <AuthContext.Provider
      value={{
        idToken: keycloak.idToken,
        idTokenParsed: keycloak.idTokenParsed,
        profile: keycloak.profile,
        token: keycloak.token,
        tokenParsed: keycloak.tokenParsed,
        login: keycloak.login,
        logout: keycloak.logout,
        register: keycloak.register,
        updateToken: keycloak.updateToken,
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
