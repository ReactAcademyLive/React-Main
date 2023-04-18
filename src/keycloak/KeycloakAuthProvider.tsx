import {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
  ReactNode,
} from 'react';
import Keycloak, { KeycloakProfile, KeycloakTokenParsed } from 'keycloak-js';

export const AuthContext = createContext<AuthContextType>({});

interface AuthContextType {
  idToken?: string;
  idTokenParsed?: KeycloakTokenParsed;
  profile?: KeycloakProfile;
  token?: string;
  tokenParsed?: KeycloakTokenParsed;
  login?: () => void;
  logout?: () => void;
  register?: () => void;
  updateToken?: (minValidity: number) => Promise<boolean>;
  keycloak?: Keycloak;
}

interface AuthProviderProps {
  config?: configType;
  children: ReactNode;
}
interface configType {
  url: string;
  realm: string;
  clientId: string;
}

const conf = {
  url: 'https://keycloak3.reactacademy.live/',
  realm: 'react-courses',
  clientId: 'august-course',
};

function AuthProvider({ config = conf, children }: AuthProviderProps) {
  const ref = useRef(new Keycloak(config));
  const keycloak = ref.current;
  const [, refresh] = useState<object>({});

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
