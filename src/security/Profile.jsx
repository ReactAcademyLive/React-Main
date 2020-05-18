import React, { useContext } from 'react';
import { UserContext } from '../common/UserProvider';
import { auth } from '../common/firebase';
import { Button } from 'reactstrap';

const ProfilePage = () => {
  let user = useContext(UserContext) ?? { displayName: 'Not logged' };

  const { photoURL, displayName, email } = user;

  return (
    <div className='mx-auto ' style={{ maxWidth: 400 }}>
      <div className='flex border flex-col items-center '>
        <div
          style={{
            backgroundImage: `url(${
              photoURL ??
              'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'
            })`,

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
      <Button
        color='primary'
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </Button>
    </div>
  );
};

export default ProfilePage;
