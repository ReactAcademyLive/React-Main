import { Button } from 'react-bootstrap';
import { useAuth } from './AuthProvider';
import axios from 'axios';

function ApiCalls() {
  const auth = useAuth();

  async function callApi(url) {
    try {
      const refreshed = await auth.updateToken(5);

      const result = await axios.get(`http://localhost:3001/api/${url}`, {
        headers: auth?.token
          ? { Authorization: `Bearer ${refreshed ? auth.keycloak.token : auth.token}` }
          : null,
      });

      alert(result.data);
    } catch (err) {
      alert("You don't have the permission! " + err.response.status);
    }
  }

  return (
    <>
      <h1>Api Calls</h1>
      <div className='d-flex justify-content-around' style={{maxWidth: '35em'}}>
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
            callApi('both-roles');
          }}
        >
          Both Roles
        </Button>
      </div>
    </>
  );
}

export default ApiCalls;
