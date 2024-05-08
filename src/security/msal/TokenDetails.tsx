import { Table } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';

function TokenDetails() {
  const msal = useMsal();
  const myIDToken = msal.instance.getActiveAccount()?.idTokenClaims;
  const myAccessToken = msal.instance.getActiveAccount()?.idTokenClaims;

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
                  <td>
                    {typeof myIDToken[key] === 'object'
                      ? JSON.stringify(myIDToken[key])
                      : (myIDToken[key] as string)}
                  </td>
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
                      : (myAccessToken[key] as string)}
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
