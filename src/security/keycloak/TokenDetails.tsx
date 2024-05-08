import { Table } from 'react-bootstrap';
import { useAuth } from './KeycloakAuthProvider';

function TokenDetails() {
  const auth = useAuth();
  const myIDToken = auth.idTokenParsed;
  const myAccessToken = auth.tokenParsed;

  return (
    <>
      <h2>ID Token Details</h2>
      {myIDToken ? (
        <Table bordered hover variant='dark'>
          <tbody>
            {Object.keys(myIDToken).map((key) => {
              return (
                <tr>
                  <td>
                    <b>{key}</b>
                  </td>
                  <td>{myIDToken[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>Not Authenticated</p>
      )}
      <h2>Access Token Details</h2>
      {myAccessToken ? (
        <Table bordered hover variant='dark'>
          <tbody>
            {Object.keys(myAccessToken).map((key) => {
              return (
                <tr>
                  <td>
                    <b>{key}</b>
                  </td>
                  <td>
                    {typeof myAccessToken[key] === 'object'
                      ? JSON.stringify(myAccessToken[key])
                      : myAccessToken[key]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <p>Not Authenticated</p>
      )}
    </>
  );
}

export default TokenDetails;
