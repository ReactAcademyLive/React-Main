import { useContext } from 'react';
import { AuthContext } from './AuthProvider.Firebase';
import { Button } from 'react-bootstrap';

const ProfilePage = () => {
  const auth = useContext(AuthContext);
  const user = auth.user ?? { displayName: 'Not logged' };

  const { photoURL, displayName, email } = user;

  return (
    <div className='mx-auto ' style={{ maxWidth: 400 }}>
      <div className='flex border flex-col items-center '>
        <div
          style={{
            backgroundImage: `url(${photoURL ?? ''})`,

            backgroundSize: 'cover',
            height: '200px',
            width: '200px',
          }}
          className='border color-primary'
        ></div>
        <div className='ms-4'>
          <h2>{displayName}</h2>
          <h3>
            <i>{email}</i>
          </h3>
        </div>
      </div>
      <div className='mt-3'>
        <Button
          variant='primary'
          onClick={() => {
            auth.logoff();
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
