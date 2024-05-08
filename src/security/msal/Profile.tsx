import { useEffect } from 'react';

// Msal imports
import { useMsalAuthentication } from './useMsalAuthentication';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest } from './authConfig';
import { Alert } from 'react-bootstrap';

// Sample app imports
// import { ProfileData } from '../ui-components/ProfileData';
// import { ErrorComponent } from '../ui-components/ErrorComponent';
// import { callMsGraph } from '../utils/MsGraphApiCall';

export default function Profile() {
  const { result, error } = useMsalAuthentication(InteractionType.Redirect, {
    ...loginRequest,
    redirectUri: '/', // e.g. /redirect
  });

  useEffect(() => {
    if (error) {
      // Error occurred attempting to acquire a token, either handle the error or do nothing
      console.log(error.message);
      return;
    }
  }, [error, result]);

  if (error) {
    return (
      <Alert variant='danger'>
        <h3>Error</h3>
        <p>{error.errorCode}</p>
        <p>{error.errorMessage}</p>
        <p>{error.name}</p>
        <p>{error.message}</p>
      </Alert>
    );
  }

  return (
    <Alert variant='info'>
      <h3>Connected</h3>
      <p>{result?.account.name}</p>
      <p>{result?.account.username}</p>
    </Alert>
  );
}
