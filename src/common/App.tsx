import { RouterProvider } from 'react-router-dom';
import KeycloakAuthProvider from '../keycloak/KeycloakAuthProvider';
import './custom.scss';
import router from './Router';
import ThemeProvider from './ThemeProvider';
//import Keycloak from 'keycloak-js';
//Auth Provider was used

export default function App() {
  return (
    <KeycloakAuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </KeycloakAuthProvider>
  );
}

/* <ReactKeycloakProvider
        authClient={
          new Keycloak({
            url: 'https://keycloak2.reactacademy.live/',
            realm: 'react-courses',
            clientId: 'august-course',
            bearerOnly: true,
            realmPublicKey:
              'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApBAvNIr2JlndzYxCS4/zbr2CEdKtkpfpo3N/6I/150t7ZrWSdDJl0Jr7Bb8215npCG/FzuiP5mLnsslPkP7JUbALJtEduNrQ0mCyrUeLdXoEtuXeLI0rqxsSRxioZED98uA71N1UrsF6I/a58U+cFJqeZ92+zF/a2Ur3MltoT193la0XvxkjFf07u7O92a1EqBCfgwSw1dGpPtK4NMHZCgezKGQXsyTewHapZxz5JDc2gDKOBU9PNOvg1HOCZiEflOCBnceVbEwMRUxtbh0H/3n/Y8B4V4stQhFlUgCKB7p5MGtMPYp5aGVjptCFNVbLse/2qxSlBt2ZAAuE7oIKFwIDAQAB',
          })
        }
        initOptions={{ checkLoginIframe: false }}
        onEvent={eventLogger}
        onTokens={tokenLogger}
      > */
