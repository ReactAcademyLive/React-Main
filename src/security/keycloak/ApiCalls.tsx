import { Button } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';
import axios, { AxiosError } from 'axios';

function ApiCalls() {
  const auth = useAuth();

  async function callApi(url: string) {
    try {
      let refreshed = false;
      if (auth?.token) {
        refreshed = await auth.updateToken!(5);
      }

      const result = await axios.get(
        `https://secure-api-kc.azurewebsites.net/api/${url}`,
        {
          headers: auth?.token
            ? {
                Authorization: `Bearer ${
                  refreshed ? auth.keycloak!.token : auth.token
                }`,
              }
            : {},
        },
      );

      alert(result.data);
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
