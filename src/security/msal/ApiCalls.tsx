import { Button } from 'react-bootstrap';
import { useMsalAuthentication } from './useMsalAuthentication';
import axios, { AxiosError } from 'axios';
import { InteractionType } from '@azure/msal-browser';

//const ApiServer: string = 'https://securefunction456.azurewebsites.net/api';
const ApiServer: string = 'http://localhost:7071/api';

export default function ApiCalls() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, error, acquireToken } = useMsalAuthentication(
    InteractionType.Redirect,
  );

  async function callApi(url: string) {
    console.log(result);
    try {
      const r = await axios.get(`${ApiServer}/${url}`, {
        headers: result?.accessToken
          ? {
              Authorization: `Bearer ${result?.accessToken}`,
            }
          : {},
      });

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
