import { RouterProvider } from 'react-router-dom';
import './custom.scss';
import router from './Router';
import ThemeProvider from './ThemeProvider';
import { Spinner } from 'react-bootstrap';
//There are two security providers here:
//Keycloak (Open source solution)
//Msal (Microsoft Authencation Library for Azure Entra ID)
import KeycloakAuthProvider from '../security/keycloak/KeycloakAuthProvider';
import { msalInstance } from '../security/msal/msalInstance';
import { MsalProvider } from '@azure/msal-react';

export default function App() {
  return (
    <MsalProvider instance={msalInstance}>
      <KeycloakAuthProvider>
        <ThemeProvider>
          <RouterProvider
            router={router}
            future={{ v7_startTransition: true }}
            fallbackElement={<Spinner />}
          />
        </ThemeProvider>
      </KeycloakAuthProvider>
    </MsalProvider>
  );
}
