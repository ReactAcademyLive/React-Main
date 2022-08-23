import React from 'react';

import Keycloak from 'keycloak-js';

import { ReactKeycloakProvider } from '@react-keycloak/web';

const tokenLogger = (tokens) => {
  console.log('onKeycloakTokens', tokens);
};
const eventLogger = (event, error) => {
  console.log('onKeycloakEvent', event, error);
};

function KeycloakRoute() {
  return (
    <ReactKeycloakProvider
      authClient={
        new Keycloak({
          url: 'https://keycloak2.reactacademy.live',
          realm: 'react-courses',
          clientId: 'August',
        })
      }
      onEvent={eventLogger}
      onTokens={tokenLogger}
    ></ReactKeycloakProvider>
  );
}

export default KeycloakRoute;
