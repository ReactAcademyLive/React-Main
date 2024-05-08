import { Button } from 'react-bootstrap';
import { useMsalAuthentication } from '@azure/msal-react';
import axios, { AxiosError } from 'axios';
import { InteractionType } from '@azure/msal-browser';

function ApiCalls() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, error, acquireToken } = useMsalAuthentication(
    InteractionType.Redirect,
  );

  async function callApi(url: string) {
    try {
      const r = await axios.get(
        `https://securefunction456.azurewebsites.net/api/${url}`,
        {
          headers: result?.accessToken
            ? {
                Authorization: `Bearer ${result?.accessToken}`,
              }
            : {},
        },
      );

      alert(r.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        alert('Http Error ' + (err.response?.status || 503));
      }
    }
  }

  return (
    <>
      <h1>Api Calls</h1>
      <div
        className='d-flex justify-content-around'
        style={{ maxWidth: '35em' }}
      >
        <Button
          onClick={() => {
            callApi('anonymous');
          }}
        >
          Anonymous
        </Button>
        <Button
          onClick={() => {
            callApi('user');
          }}
        >
          User
        </Button>
        <Button
          onClick={() => {
            callApi('admin');
          }}
        >
          Admin
        </Button>
        <Button
          onClick={() => {
            callApi('either-role');
          }}
        >
          Either Role
        </Button>
      </div>
    </>
  );
}

export default ApiCalls;
