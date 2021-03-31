import React, { useContext } from 'react';
import { AuthContext } from '../common/AuthProvider';
import { Button } from 'reactstrap';

const ProfilePage = () => {
  let auth = useContext(AuthContext);
  let user = auth.user ?? { displayName: 'Not logged' };

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
        <div className='ml-4'>
          <h2>{displayName}</h2>
          <h3>
            <i>{email}</i>
          </h3>
        </div>
      </div>
      <div className='mt-3'>
        <Button
          color='primary'
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
